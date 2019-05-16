import Ember from 'ember';
import { Query } from 'ember-flexberry-data';
import { SimplePredicate } from 'ember-flexberry-data/query/predicate';
import Moment from 'moment';
//import AR from '../classes/ActiveResource';
//import Process from '../classes/Process';

export default Ember.Controller.extend({
    time: 0,
    log: [],
    process: null,

    waitForUserMode: false,

    activeProcesses: [], //
    activeARProcesses: [], //

    arInstances: [],

    agents: [],

    resolveUserChoice: null,
    resolveNextOperation: null,

    helloworld() { },

    init() {
        this._super(...arguments);

        var self = this;

        //this.set('time', new Moment().format('DD-MM-YYYY HH:MM'));
    },

    /**
     * Загружает новый процесс
     * @param {string} code Код процесса
     * @returns {Promise} Загруженный процесс
     */
    loadProcess(code) {
        let self = this;
        let byCode = new SimplePredicate('code', Query.FilterOperator.Eq, code);

        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-business-process')
            .selectByProjection('BusinessProcessE')
            .where(byCode)
            .top(1);

        return self.get('store').query('n-i-b-g-business-process', builder.build()).then((result) => {
            let process = result.get('firstObject');
            console.log('Загружен процесс: ' + code);
            return process;
        });
    },

    startProcess(code) {
        var self = this;
        return this.loadProcess(code).then((process) => {
            if (process === undefined) {
                throw new Error(`Процесс ${code} не найден в базе данных`);
            }
            let lsa = process.get('lSA');
            self.addProcessDebug(process);
            this.playLSA(lsa);
            self.removeProcessDebug(code);
        });
    },

    loadOperation(code) {
        let self = this;
        let byCode = new SimplePredicate('code', Query.FilterOperator.Eq, code);

        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-operation')
            .selectByProjection('OperationE')
            .where(byCode)
            .top(1);

        return self.get('store').query('n-i-b-g-operation', builder.build()).then((result) => {
            let operation = result.get('firstObject');
            console.log('Загружена операция: ' + code);
            return operation;
        });
    },

    startOperation(code) {
        let self = this;
        return this.loadOperation(code).then((operation) => {
            if (operation === undefined) {
                throw new Error(`Операция ${code} не найдена в базе данных`);
            }
            let duration = operation.get('duration');
            let time = self.get('time');
            self.set('time', time + duration);
        });
    },

    loadARProcess(code) {
        let self = this;
        let byCode = new SimplePredicate('code', Query.FilterOperator.Eq, code);

        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-a-r-business-process')
            .selectByProjection('ARBusinessProcessE')
            .where(byCode)
            .top(1);

        return self.get('store').query('n-i-b-g-a-r-business-process', builder.build()).then((result) => {
            let process = result.get('firstObject');
            console.log('Загружен процесс АР: ' + process);
            return process;
        });
    },

    startARProcess(code) {
        let self = this;
        return this.loadARProcess(code).then((process) => {
            if (process === undefined) {
                throw new Error(`Процесс ${code} не найден в базе данных`);
            }
            let lsa = process.get('lSA');
            self.addARProcessDebug(process);

            return self.loadARInstanceByProcess(code).then((arI) => {
                let arIs = self.get('arInstances');
                arIs.pushObject(arI);
                self.set('arInstances', arIs);

                self.playLSA(lsa);
            });
        });
    },

    loadARInstanceByProcess(code) {
        let self = this;

        //Загрузим процесс:
        return this.loadARProcess(code).then((process) => {
            let arInstanceKey = process.get('aRInstance.id');

            //Загрузим связанный с АРБП экземпляр АР:
            let byID = new SimplePredicate('id', Query.FilterOperator.Eq, arInstanceKey);
            let builder = new Query.Builder(this.get('store'))
                .from('n-i-b-g-a-r-instance')
                .selectByProjection('ARInstanceE')
                .where(byID)
                .top(1);
            return self.get('store').query('n-i-b-g-a-r-instance', builder.build()).then((result) => {
                let arInstance = result.get('firstObject');
                console.log('Загружен экземпляр АР: ' + code);
                return arInstance;
            });
        });
    },

    loadAROperation(code) {
        let self = this;
        let byCode = new SimplePredicate('code', Query.FilterOperator.Eq, code);

        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-a-r-operation')
            .selectByProjection('AROperationE')
            .where(byCode)
            .top(1);

        return self.get('store').query('n-i-b-g-a-r-operation', builder.build()).then((result) => {
            let arOperation = result.get('firstObject');
            console.log('Загружена операция АР: ' + code);
            return arOperation;
        });
    },

    startAROperation(code) {
        let self = this;
        return this.loadAROperation(code).then((operation) => {
            if (operation === undefined) {
                throw new Error(`Операция ${code} не найдена в базе данных`);
            }
            let duration = operation.get('duration');
            let time = self.get('time');
            self.set('time', time + duration);
        });
    },

    loadResource(code) {
        var self = this;
        var byCode = new SimplePredicate('code', Query.FilterOperator.Eq, code);

        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-resource')
            .selectByProjection('ResourceE')
            .where(byCode);

        return self.get('store').query('n-i-b-g-resource', builder.build()).then((result) => {
            let resource = result.get('firstObject');
            console.log('Загружен ресурс: ' + code);
            return resource;
        });
    },

    loadAllResources() {
        let self = this;
        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-resource')
            .selectByProjection('ResourceE');

        return self.get('store').query('n-i-b-g-resource', builder.build()).then((result) => {
            result = this.uniqueBy(result, 'code').sortBy('code');
            console.log('Загружены все ресурсы: ' + result);
            return result;
        });
    },

    loadAllActiveResources() {
        let self = this;
        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-active-resource')
            .selectByProjection('ActiveResourceE');

        return self.get('store').query('n-i-b-g-active-resource', builder.build()).then((result) => {
            result = this.uniqueBy(result, 'code').sortBy('code');
            console.log('Загружены все активные ресурсы: ' + result);
            return result;
        });
    },

    uniqueBy(model, property) {
        var uniqueObjects = [];
        return model.filter(function (item) {
            if (!uniqueObjects.isAny(property, item.property)) {
                uniqueObjects.push(item);
                return true;
            }
            return false;
        });
    },

    addProcessDebug(process) {
        let processes = this.get('activeProcesses');
        processes.pushObject(process);
        this.set('activeProcesses', processes);
    },

    addARProcessDebug(process) {
        let processes = this.get('activeARProcesses');
        processes.pushObject(process);
        this.set('activeARProcesses', processes);
    },

    removeProcessDebug(code) {
        let processes = this.get('activeProcesses');
        let process = processes.findBy('code', code);
        processes.removeObject(process);
        this.set('activeProcesses', processes);
    },

    removeARProcessDebug(code) {
        let processes = this.get('activeARProcesses');
        let process = processes.findBy('process.code', code);
        processes.removeObject(process);
        this.set('activeARProcesses', processes);
    },

    isNumber(text) {
        return (!isNaN(text) && text !== ' ');
    },

    //TODO:
    checkUserChoice(chosenResources, condition) {
        //TODO: array input
        /*let resArray = chosenResources.sortBy('code');
        let resArray = [chosenResources];
        let concatedString = '';
        for (var i = 0, len = resArray.length; i < len; i++) {
            concatedString += resArray[i].get('code');
        }

        return (concatedString === condition);
        */
        return (chosenResources === condition);
    },

    //Проверить выбор игрока (из всех возможных ресурсов):
    askForChoice() {
        let self = this;
        return this.loadAllResources().then((resources) => {
            this.set('userChoice', resources);
            Ember.$('.ui.modal').modal('show');
            return new Promise((resolve, reject) => {
                self.set('resolveUserChoice', resolve);
            })
        });
    },

    //Ждать следующей команды
    waitNextOperationCommand() {
        let self = this;
        return new Promise((resolve, reject) => {
            self.set('resolveNextOperation', resolve);
        });
    },

    userChosen(resources) {
        //Продолжим интерпретировать ЛСА
        //в зависимости от выбранного ресурса
        let resolve = this.get('resolveUserChoice');
        resolve(resources);
    },

    nextLSACommand(lsa, pos) {
        let self = this;

        let command = {
            type: '',
            value: null,
        };

        //Интерпретация ЛСА (получение команды ЛСА):
        switch (lsa.charAt(pos)) {
            case 'p':
                pos++;
                //Extract condition (for ex. R1R2R3):
                let condition = '';
                while (lsa.charAt(pos) === 'R' || this.isNumber(lsa.charAt(pos))) {
                    condition += lsa.charAt(pos);
                    pos++;
                }

                command = {
                    type: 'choice',
                    value: condition
                };
                break;
            case '^':
                pos++;
                //Extract number after ^:
                let endpointNumber = '';
                while (this.isNumber(lsa.charAt(pos))) {
                    endpointNumber += lsa.charAt(pos);
                    pos++;
                }
                command = {
                    type: 'moveTo',
                    value: endpointNumber
                };
                break;
            case 'w':
                pos++;
                this.nextLSACommand(lsa, pos);
                break;

            //____________Запуск процессов и операций___________
            case 'P':
                //Extract process code:
                let processCode = 'P'; pos++;
                while (this.isNumber(lsa.charAt(pos))) {
                    processCode += lsa.charAt(pos);
                    pos++;
                }

                command = {
                    type: 'simulate',
                    value: processCode,
                };
                break;
            case 'O':
                //Extract operation code:
                let operCode = 'O'; pos++;
                while (this.isNumber(lsa.charAt(pos))) {
                    operCode += lsa.charAt(pos);
                    pos++;
                }
                command = {
                    type: 'simulate',
                    value: operCode,
                };
                break;
            case 'A':
                pos += 2;
                if (lsa.charAt(pos) === 'P') {
                    //Extract active resource process code:
                    let arProcessCode = 'ARP'; pos++;
                    while (this.isNumber(lsa.charAt(pos))) {
                        arProcessCode += lsa.charAt(pos);
                        pos++;
                    }
                    command = {
                        type: 'simulate',
                        value: arProcessCode,
                    };
                }
                else if (lsa.charAt(pos) === 'O') {
                    //Extract active resource operation code:
                    let arOperationCode = 'ARO'; pos++;
                    while (this.isNumber(lsa.charAt(pos))) {
                        arOperationCode += lsa.charAt(pos);
                        pos++;
                    }
                    command = {
                        type: 'simulate',
                        value: arOperationCode,
                    };
                }
                break;
            //___________Запуск процессов и операций END_____________
            case 'F':
                command = {
                    type: 'finish',
                    value: lsa,
                };
                break;
            default:
                pos++;
                this.nextLSACommand(lsa, pos);
                break;
        }

        //Логирование полученной команды:
        this.logLSACommand(command);

        //Исполнение команды ЛСА:
        switch (command.type) {
            case 'simulate':
                switch (command.value.charAt(0)) {
                    case 'P':
                        return this.startProcess(command.value).then(() => {
                            self.nextLSACommand(lsa, pos);
                        });
                    //break;
                    case 'O':
                        return this.startOperation(command.value).then(() => {
                            self.nextLSACommand(lsa, pos);
                        });
                    //break;
                    case 'A':
                        switch (command.value.charAt(2)) {
                            case 'P':
                                return this.startARProcess(command.value).then(() => {
                                    self.nextLSACommand(lsa, pos);
                                });
                            //break;
                            case 'O':
                                return this.startAROperation(command.value).then(() => {
                                    if (self.get('waitForUserMode')) {
                                        self.waitNextOperationCommand().then(() => {
                                            self.nextLSACommand(lsa, pos);
                                        });
                                    }
                                    else {
                                        self.nextLSACommand(lsa, pos);
                                    }
                                });
                            //break;
                        }
                        break;
                }
                break;
            case 'choice':
                //В этот момент интерпретатор стоит на знаке ^
                let condition = command.value;
                this.askForChoice().then((chosenResources) => {
                    let correct = self.checkUserChoice(chosenResources, condition);
                    while (!correct) {
                        if (!correct)
                            pos++;

                        //Skip number:
                        while (this.isNumber(lsa.charAt(pos)) || lsa.charAt(pos) === ' ') {
                            pos++;
                        }

                        if (lsa.charAt(pos) === 'p') {
                            pos++;

                            //Extract condition (for ex. R1R2R3):
                            condition = '';
                            while (lsa.charAt(pos) === 'R' || this.isNumber(lsa.charAt(pos))) {
                                condition += lsa.charAt(pos);
                                pos++;
                            }
                            correct = self.checkUserChoice(chosenResources, condition);
                            //Если верно, запускаем символ ^.
                            //Если неверно, цикл повторится
                        }
                        else if (lsa.charAt(pos) === 'w') {
                            correct = true;
                        }
                        else {
                            correct = true;
                        }
                    }
                    this.nextLSACommand(lsa, pos);
                });
                break;
            case 'moveTo':
                let number = command.value;
                let correctEndPoint = false;
                while (!correctEndPoint) {
                    while (lsa.charAt(pos) !== '.') {
                        pos++;
                    }
                    pos++;

                    //Move to next endpoint:
                    let endpoint = '';
                    while (this.isNumber(lsa.charAt(pos))) {
                        endpoint += lsa.charAt(pos);
                        pos++;
                    }

                    //Check if endpoint is valid:
                    if (endpoint === number) {
                        correctEndPoint = true;
                    }
                }
                pos++;

                this.nextLSACommand(lsa, pos);
                break;
            case 'finish':
                break;
        }
    },

    logLSACommand(command) {
        if (command.type !== '') {
            let log = this.get('log');
            log.pushObject({ text: command.type + ' ' + command.value, date: new Date(), });
            log.sortBy('date');
            this.set('log', log);
        }
    },

    clearLog() {
        this.set('time', 0);
        this.set('log', []);
        this.set('activeProcesses', []);
        this.set('activeARProcesses', []);
    },

    playLSA(lsa) {
        let pos = 0;
        this.logLSACommand({ type: 'start', value: lsa });
        this.nextLSACommand(lsa, pos);
    },

    actions: {

        nextOperation() {
            let resolve = this.get('resolveNextOperation');
            resolve();
        },

        startProcess() {
            let self = this;
            this.clearLog();
            this.startProcess('P0');
        },

        showDebug() {
            this.set('debugMode', true);
        },

        choice(item) {
            let chosenResource = item.get('code');
            this.userChosen(chosenResource);
            $('.ui.modal').modal('hide');
        },

        clearLog() {
            this.clearLog();
        },
    }
});