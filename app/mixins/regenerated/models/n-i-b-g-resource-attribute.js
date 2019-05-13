import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  amount: DS.attr('number'),
  resource: DS.belongsTo('n-i-b-g-resource', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      resource: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ResourceAttributeE', 'n-i-b-g-resource-attribute', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    resource: Projection.belongsTo('n-i-b-g-resource', 'Resource', {
      code: Projection.attr('Code')
    })
  });
  modelClass.defineProjection('ResourceAttributeL', 'n-i-b-g-resource-attribute', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    resource: Projection.belongsTo('n-i-b-g-resource', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true })
  });
};
