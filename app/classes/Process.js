import Ember from 'ember';

export default Ember.Object.extend({
    Code: null,
    LSA: null,

    init() {
        this.set('timer', 0);
    },

});