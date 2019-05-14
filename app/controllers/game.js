import Ember from 'ember';
import { Query } from 'ember-flexberry-data';
import { SimplePredicate } from 'ember-flexberry-data/query/predicate';
import Moment from 'moment';
import AR from '../classes/ActiveResource';
import Process from '../classes/Process';

export default Ember.Controller.extend({
    time: new Date(),

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

    loadResource(code) {
        var self = this;
        var byCode = new SimplePredicate('code', Query.FilterOperator.Eq, code);

        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-resource')
            .selectByProjection('ResourceE')
            .where(byCode);

        return self.get('store').query('n-i-b-g-resource', builder.build()).then((result) => {
            let resource = result.get('firstObject');
            console.log('Загружен ресурс: ' + resource)
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
        if (condition = "R1")
            return true;
        else
            return false;
    },

    playLSA(lsa) {
        let pos = 0;
        //let lsa = "pR1^1 pR2^2 pR3^3 .1 P1P2P3 w^4 .2 P4P5P6 w^4 .3 P7P8P9 w^4 .4 F";

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
