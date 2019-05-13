import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  amount: DS.attr('number'),
  resourceType: DS.belongsTo('n-i-b-g-resource-type', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      resourceType: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ResourceE', 'n-i-b-g-resource', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    resourceType: Projection.belongsTo('n-i-b-g-resource-type', 'Resource type', {
      code: Projection.attr('Code')
    })
  });
  modelClass.defineProjection('ResourceL', 'n-i-b-g-resource', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    resourceType: Projection.belongsTo('n-i-b-g-resource-type', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true })
  });
};
