import Ember from 'ember';
import { Query } from 'ember-flexberry-data';
import { SimplePredicate } from 'ember-flexberry-data/query/predicate';
import Moment from 'moment';
import AR from '../classes/ActiveResource';
import Process from '../classes/Process';

export default Ember.Controller.extend({
    time: new Date(),
    log: [],
    process: null,

    activeProcesses: [],
    agents: [],

    helloworld() { },

    init() {
        this._super(...arguments);

        var self = this;

        this.set('time', new Moment(new Date()).format('DD-MM-YYYY HH:MM'));
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
            console.log('Загружен процесс: ' + process);
            return process;
        });
    },

    startProcess(code) {
        var self = this;
        return this.loadProcess(code).then((process) => {
            let lsa = process.get('lSA');
            self.addProcessDebug(process);
            this.playLSA(lsa);
            //self.removeProcessDebug(code);
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
            console.log('Загружена операция: ' + operation);
            return operation;
        });
    },

    startOperation(code) {
        let self = this;
        let time = this.get('time');
        this.loadOperation(code).then((operation) => {
            let duration = operation.get('duration');
            time.setDate(time.getDate() + duration);
            self.set('time', time);
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
        var self = this;
        return this.loadARProcess(code).then((process) => {
            let lsa = process.get('lSA');
            self.addProcessDebug(process);
            this.playLSA(lsa);
            //self.removeProcessDebug(code);
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
            let process = result.get('firstObject');
            console.log('Загружена операция АР: ' + process);
            return process;
        });
    },

    startAROperation(code) {
        let self = this;
        let time = this.get('time');
        var ok = this.loadOperation(code).then((operation) => {
            let duration = operation.get('duration');
            time.setDate(time.getDate() + duration);
            self.set('time', time);
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
            console.log('Загружен ресурс: ' + resource);
            return resource;
        });
    },

    addProcessDebug(process) {
        let processes = this.get('activeProcesses');
        processes.pushObject(process);
        this.set('activeProcesses', processes);
    },

    removeProcessDebug(code) {
        let processes = this.get('activeProcesses');
        let process = processes.findBy('code', code);
        processes.removeObject(process);
        this.set('activeProcesses', processes);
    },

    isNumber(text) {
        return (!isNaN(text) && text !== ' ');
    },

    //TODO:
    checkUserChoice(condition) {
        condition === "R1" ? true : false;
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
                //pR1^1 pR2^2 pR3^3 .1 sARP1sARP2sARP3 w^4 .2 sP4sP5sP6 w^4 .3 sP7sP8sP9 w^4 .4 F

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
            case 's':
                pos++;

                switch (lsa.charAt(pos)) {
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
                }

                break;
            case 'w':
                pos++;
                this.nextLSACommand(lsa, pos);
                break;
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
                    case 'O':
                        this.startOperation(command.value).then(() => {
                            self.nextLSACommand(lsa, pos);
                        });
                        break;
                    case 'P':
                        this.startProcess(command.value).then(() => {
                            self.nextLSACommand(lsa, pos);
                        });
                        break;
                    case 'A':
                        switch (command.value.charAt(2)) {
                            case 'P':
                                this.startARProcess(command.value).then(() => {
                                    self.nextLSACommand(lsa, pos);
                                });
                                break;
                            case 'O':
                                this.startAROperation(command.value).then(() => {
                                    self.nextLSACommand(lsa, pos);
                                });
                                break;
                        }
                        break;
                }
                break;
            case 'choice':
                let condition = command.value;
                let correct = this.checkUserChoice(condition);
                if (!correct) {
                    pos++;
                    //Skip number:
                    while (this.isNumber(lsa.charAt(pos))) {
                        pos++;
                    }
                }
                this.nextLSACommand(lsa, pos);
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

    playLSA(lsa) {
        let pos = 0;
        this.logLSACommand({ type: 'start', value: lsa });
        this.nextLSACommand(lsa, pos);
    },

    playLSA_old(lsa) {
        let pos = 0;

        while (lsa.charAt(pos) != 'F') {
            switch (lsa.charAt(pos)) {
                case 'p':
                    pos++;

                    //Extract condition (for ex. R1R2R3):
                    let condition = '';
                    while (lsa.charAt(pos) === 'R' || this.isNumber(lsa.charAt(pos))) {
                        condition += lsa.charAt(pos);
                        pos++;
                    }

                    let correct = this.checkUserChoice(condition);
                    if (!correct) {
                        pos++;
                        //Skip number:
                        while (this.isNumber(lsa.charAt(pos))) {
                            pos++;
                        }
                    }
                    break;
                case '^':
                    pos++;

                    //Extract number after ^:
                    let number = '';
                    while (this.isNumber(lsa.charAt(pos))) {
                        number += lsa.charAt(pos);
                        pos++;
                    }

                    //Move to next valid endpoint:
                    let correctEndPoint = false;
                    while (!correctEndPoint) {
                        while (lsa.charAt(pos) != '.') {
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
                    break;
                case 's':
                    pos++;

                    switch (lsa.charAt(pos)) {
                        case 'P':
                            //Extract process code:
                            let processCode = 'P'; pos++;
                            while (this.isNumber(lsa.charAt(pos))) {
                                processCode += lsa.charAt(pos);
                                pos++;
                            }
                            //Run process:
                            this.startProcess(processCode).then(() => {

                            });
                            break;
                        case 'O':
                            //Extract operation code:
                            let operCode = 'O'; pos++;
                            while (this.isNumber(lsa.charAt(pos))) {
                                operCode += lsa.charAt(pos);
                                pos++;
                            }
                            //Run operation:
                            this.startOperation(operCode);
                            break;
                        case 'A':
                            pos += 2;
                            if (lsa.charAt(pos) == 'P') {
                                //Extract active resource process code:
                                let arProcessCode = 'ARP'; pos++;
                                while (this.isNumber(lsa.charAt(pos))) {
                                    arProcessCode += lsa.charAt(pos);
                                    pos++;
                                }
                                this.startARProcess(arProcessCode);
                            }
                            else if (lsa.charAt(pos) == 'O') {
                                //Extract active resource operation code:
                                let arOperationCode = 'ARO'; pos++;
                                while (this.isNumber(lsa.charAt(pos))) {
                                    arOperationCode += lsa.charAt(pos);
                                    pos++;
                                }
                                this.startAROperation(arOperationCode);
                            }

                            break;
                    }

                    break;
                case 'w':
                    pos++;
                    break;
                default:
                    pos++;
                    break;
            }
        }

    },

    tick() {
        var self = this;
        var tasks = this.get('tasks');

        tasks.get('firstObject').tick();

        tasks.forEach(function (task) {
            var cost_remaining = task.getAttrValue('cost_remaining');

            var selectedWorker = task.get('selectedWorker');
            var w = self.getSelectedWorker(selectedWorker);
            var skill = w.getAttrValue('skill_prog');

            var newValue = cost_remaining - 3 * skill;

            task.setAttrValue('cost_remaining', newValue);
        });
        this.get('workers').forEach(function (worker) {
            var budget = self.get('budgets').get('firstObject');
            var newValue = budget.getAttrValue('amount') - 50;
            budget.setAttrValue('amount', newValue);
        });
        var newDate = Moment(self.get('time'), "DD-MM-YYYY").add('days', 1).format("DD-MM-YYYY");
        self.set('time', newDate);
    },

    loadScenario() {
        //Парсить scenario.xml
        //Спарсить объекты типа Process
        //Добавить Process в store

        //Другие объекты смогут работать с Process
    },

    actions: {

        simulate() {
            var self = this;

            this.simulateProcess();
            return;
            //Запустить сценарий

            var ticks = this.get('ticks');
            for (var i = 0; i < ticks; i++) {
                this.tick();
            }
        },

        startProcess() {
            let self = this;
            this.startProcess('P0');
        },

        showDebug() {
            this.set('debugMode', true);
        },
    }
});
