import Ember from 'ember';
import { Query } from 'ember-flexberry-data';
import { SimplePredicate } from 'ember-flexberry-data/query/predicate';
import Moment from 'moment';
import AR from '../classes/ActiveResource';
import Process from '../classes/Process';
import LSAHandler from '../classes/LSAHandler';

export default Ember.Controller.extend({
    process: null,
    agents:[],

    helloworld() { },
    
    init() {
        this._super(...arguments);
        
        /*var self = this;
        var ar = new AR();
        ar.schedule(process);
        
        this.set('time', new Moment(new Date()).format('DD-MM-YYYY'));

        this.loadResource('worker').then(() => {
            self.setWorkerList();
        });
        this.loadResource('task');
        this.loadResource('budget');
        */
    },

    loadProcess(code) {
        let self = this;
        let byCode = new SimplePredicate('code', Query.Operator.Eq, code);

        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-business-process')
            .selectByProjection('BusinessProcessE')
            .where(byCode)
            .top(1);

        return self.get('store').query('n-i-b-g-business-process', builder.build()).then((result) => {
            let process = result.get('firstObject');
            console.log('Загружен процесс: ' + process)
            return process;
        });
    },

    loadOperation(code){
        let self = this;
        let byCode = new SimplePredicate('code', Query.Operator.Eq, code);

        let builder = new Query.Builder(this.get('store'))
            .from('n-i-b-g-operation')
            .selectByProjection('OperationE')
            .where(byCode)
            .top(1);

        return self.get('store').query('n-i-b-g-operation', builder.build()).then((result) => {
            let operation = result.get('firstObject');
            console.log('Загружена операция: ' + operation)
            return operation;
        });
    },

    isNumber(text){
        return (!isNaN(text) && text!==' ');
    },

    //TODO:
    startProcess(code) {
        console.log('Старт процесса: ' + code);
    },

    //TODO:
    checkUserChoice(condition) {
        if (condition = "R1")
            return true;
        else 
            return false;
    },

    playLSA() {
        let pos = 0;
        let lsa = "pR1^1 pR2^2 pR3^3 .1 P1P2P3 w^4 .2 P4P5P6 w^4 .3 P7P8P9 w^4 .4 F";

        while(lsa.charAt(pos) != 'F')
        {
            switch (lsa.charAt(pos))
            {
                case 'p':
                    pos++;
                    
                    //Extract condition (for ex. R1R2R3):
                    let condition = '';
                    while (lsa.charAt(pos) === 'R' || this.isNumber(lsa.charAt(pos)))
                    {
                        condition+=lsa.charAt(pos);
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
                        number+=lsa.charAt(pos);
                        pos++;
                    }

                    //Move to next valid endpoint:
                    let correctEndPoint = false;
                    while(!correctEndPoint) {
                        while(lsa.charAt(pos)!='.') {
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
                        if (endpoint === number){
                            correctEndPoint = true;
                        }
                    }
                    pos++;
                    break;
                case 's':
                    pos++;

                    //Extract process code:
                    let processCode = '';
                    while (this.isNumber(lsa.charAt(pos))) {
                        processCode += lsa.charAt(pos);
                        pos++;
                    }

                    //Run process:
                    this.startProcess(processCode);
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

    startOperation(code) {
        this.loadOperation(code).then((operation)=>{
            
        });
    },

    loadResource(name) {
        var self = this;
        var isType = new SimplePredicate('resType.keyname', Query.FilterOperator.Eq, name);

        let builder = new Query.Builder(this.get('store'))
            .from('b-g-resource')
            .selectByProjection('ResourceE')
            .where(isType);

        return self.get('store').query('b-g-resource', builder.build()).then((result) => {

            result.forEach((element) => {
                element.initController();
            });

            var name_s = name + 's';
            self.set(name_s, result);
            console.log(name_s + ':');
            console.log(self.get(name_s));
        });
    },

    setWorkerList() {
        var self = this;

        var temp = {};
        var workers = self.get('workers');
        workers.toArray().forEach(function (el) {
            temp[el.get('name')] = el;
        });

        this.set('workerList', temp);

        this.set('workersNames', Object.keys(temp));
    },

    getSelectedWorker(name) {
        return this.get('workerList')[name];
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

        testLSA(){
            this.playLSA(this.LSA);
        },

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

        loadProcess() {
            let self = this;
            this.loadProcess().then((process) => {
                self.set('process', process)
            });
        },
    }
});
