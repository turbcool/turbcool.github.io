import Ember from 'ember';

export default Ember.Object.extend({
    timer: null,
    process: null,
    helloworld: null,
    queue: [],

    init() {
        this.set('timer', 0);
    },

    //Продвинуть время на 1 ед:
    /**
     * @method tick hello
     * @param {int} asd asd
     */
    tick(asd) {

    },

    schedule(process) {
        
    }
});