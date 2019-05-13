import Ember from 'ember';

export default Ember.Object.extend({

    text: "pR1^1 pR2^2 pR3^3 .1 sP1sP2sP3 w^4 .2 sP4sP5sP6 w^4 .3 sP7sP8sP9 w^4 .4 F",
    position: 0,

    char: Ember.computed('text', 'position', {
        get() {
            return this.text.charAt(this.position);   
        }
    }),

    init() {
        this.set('timer', 0);
    },

    extractNumber(){

    },

    extractResources(){

    },

    extractProcesses(){

    },

    playLSAOld() {
        //pR1^1 pR2^2 pR3^3 .1 P1P2P3 w^4 .2 P4P5P6 w^4 .3 P7P8P9 w^4 .4 F

        let pos = this.position;
        let text = this.text;

        while(text.charAt(pos) != 'F')
        {
            switch (text.charAt(pos))
            {
                case 'p':
                    pos++;
                    let condition = '';
                    //Вытащить условие (напр. R1R2R3):
                    while (text.charAt(pos) === 'R' || this.isNumber(text.charAt(pos)))
                    {
                        condition+=text.charAt(pos);
                        pos++;
                    }
                    
                    let correct = this.checkUserChoice(condition);
                    if (!correct) {
                        pos++;
                        while (this.isNumber(text.charAt(pos))) {
                            pos++;
                        }
                    }
                    break;
                case '^':
                    pos++;
                    let number = '';
                    //Вытащить число после ^:
                    while (this.isNumber(text.charAt(pos))) {
                        number+=text.charAt(pos);
                        pos++;
                    }

                    let correctEndPoint = false;
                    while(!correctEndPoint) {
                        while(text.charAt(pos)!='.') {
                            pos++;
                        }

                        pos++;
                        
                        let endpoint = '';
                        while (this.isNumber(text.charAt(pos))) {
                            endpoint += text.charAt(pos);
                            pos++;
                        }
                        if (endpoint === number){
                            correctEndPoint = true;
                        }
                    }
                    pos++;
                    break;
                case 's':
                    pos++;

                    let processCode = '';
                    while (this.isNumber(text.charAt(pos))) {
                        processCode += text.charAt(pos);
                        pos++;
                    }
                    this.startProcess(processCode);
                    break;
                default:
                    pos++;
                    break;
            }
        }
    },

    playLSA() {
        //pR1^1 pR2^2 pR3^3 .1 P1P2P3 w^4 .2 P4P5P6 w^4 .3 P7P8P9 w^4 .4 F

        let pos = this.position;
        let text = this.text;

        while(text.charAt(pos) != 'F')
        {
            switch (text.charAt(pos))
            {
                case 'p':
                    pos++;
                    let condition = '';
                    //Вытащить условие (напр. R1R2R3):
                    while (text.charAt(pos) === 'R' || this.isNumber(text.charAt(pos)))
                    {
                        condition+=text.charAt(pos);
                        pos++;
                    }
                    
                    let correct = this.checkUserChoice(condition);
                    if (!correct) {
                        pos++;
                        while (this.isNumber(text.charAt(pos))) {
                            pos++;
                        }
                    }
                    break;
                case '^':
                    pos++;
                    let number = '';
                    //Вытащить число после ^:
                    while (this.isNumber(text.charAt(pos))) {
                        number+=text.charAt(pos);
                        pos++;
                    }

                    let correctEndPoint = false;
                    while(!correctEndPoint) {
                        while(text.charAt(pos)!='.') {
                            pos++;
                        }

                        pos++;
                        
                        let endpoint = '';
                        while (this.isNumber(text.charAt(pos))) {
                            endpoint += text.charAt(pos);
                            pos++;
                        }
                        if (endpoint === number){
                            correctEndPoint = true;
                        }
                    }
                    pos++;
                    break;
                case 's':
                    pos++;

                    let processCode = '';
                    while (this.isNumber(text.charAt(pos))) {
                        processCode += text.charAt(pos);
                        pos++;
                    }
                    this.startProcess(processCode);
                    break;
                default:
                    pos++;
                    break;
            }
        }
    },

    isNumber(text){
        return (!isNaN(text) && text!==' ');
    },

    startOperation(code) {
        this.loadOperation(code).then((operation)=>{
            
        });
    },

});