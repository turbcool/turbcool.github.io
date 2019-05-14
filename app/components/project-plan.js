import Ember from 'ember';
import { Query } from 'ember-flexberry-data';
import { SimplePredicate } from 'ember-flexberry-data/query/predicate';

export default Ember.Component.extend({

    resource: null,
    resourceType: null,

    init() {
        this._super(...arguments);
        let self = this;
        let res = this.get('resource');
        let resID = res.get('id');
        let resTypeID = res.get('resourceType.id');
        let store = res.get('store');

        this.loadResType(resTypeID, store).then((resType) => {
            self.set('resourceType', resType);

            self.$('#' + resID).click(() => {
                self.sendAction('choice', res);
            });

        });
    },

    /**
     * Загружает тип ресурса
     * @param {guid} key 
     * @returns {Model} модель "тип ресурса"
     */
    loadResType(key, store) {
        let self = this;
        let byKey = new SimplePredicate('id', Query.FilterOperator.Eq, key);

        let builder = new Query.Builder(store)
            .from('n-i-b-g-resource-type')
            .selectByProjection('ResourceTypeE')
            .where(byKey)
            .top(1);

        return store.query('n-i-b-g-resource-type', builder.build()).then((result) => {
            let resType = result.get('firstObject');
            console.log('Загружен тип ресурса: ' + resType);
            return resType;
        });
    },

});
