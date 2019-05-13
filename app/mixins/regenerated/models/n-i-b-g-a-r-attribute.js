import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  amount: DS.attr('number'),
  aRInstance: DS.belongsTo('n-i-b-g-a-r-instance', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      aRInstance: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ARAttributeE', 'n-i-b-g-a-r-attribute', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    aRInstance: Projection.belongsTo('n-i-b-g-a-r-instance', 'Экземпляр активного ресурса', {
      name: Projection.attr('Экземпляр активного ресурса', { hidden: true })
    }, { displayMemberPath: 'name' })
  });
  modelClass.defineProjection('ARAttributeL', 'n-i-b-g-a-r-attribute', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    aRInstance: Projection.belongsTo('n-i-b-g-a-r-instance', '', {
      code: Projection.attr('')
    }, { hidden: true })
  });
};
