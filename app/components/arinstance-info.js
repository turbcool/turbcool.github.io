import Ember from 'ember';
import { Query } from 'ember-flexberry-data';
import { SimplePredicate } from 'ember-flexberry-data/query/predicate';

export default Ember.Component.extend({

    arinstance: null,
    arinstanceType: null,
    attributes: [],

    init() {
        this._super(...arguments);
        let self = this;
        let arInst = this.get('arinstance');
        let arInstID = arInst.get('id');
        let arID = arInst.get('activeResource.id');
        let store = arInst.get('store');

        this.loadARInstanceType(arID, store).then((arType) => {
            self.set('arinstanceType', arType);
        });
        this.loadAttributes(arInstID, store).then((attrs) => {
            self.set('attributes', attrs);
        });
    },

    /**
     * Загружает тип ресурса
     * @param {guid} key 
     * @returns {Model} модель "тип ресурса"
     */
    loadARInstanceType(key, store) {
        let self = this;
        let byKey = new SimplePredicate('id', Query.FilterOperator.Eq, key);

        let builder = new Query.Builder(store)
            .from('n-i-b-g-active-resource')
            .selectByProjection('ActiveResourceE')
            .where(byKey)
            .top(1);

        return store.query('n-i-b-g-active-resource', builder.build()).then((result) => {
            let arinstanceType = result.get('firstObject');
            console.log('Загружен тип экземпляра активного ресурса: ' + arinstanceType);
            return arinstanceType;
        });
    },

    loadAttributes(key, store) {
        let self = this;
        let byARI = new SimplePredicate('aRInstance.id', Query.FilterOperator.Eq, key);

        let builder = new Query.Builder(store)
            .from('n-i-b-g-a-r-attribute')
            .selectByProjection('ARAttributeE')
            .where(byARI);

        return store.query('n-i-b-g-a-r-attribute', builder.build()).then((result) => {
            return result;
        });
    }

});
