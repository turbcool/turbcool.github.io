import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  resourceType: DS.belongsTo('resource-type', { inverse: null, async: false }),
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
  modelClass.defineProjection('ResourceE', 'resource', {
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    resourceType: Projection.belongsTo('resource-type', 'Resource type', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ResourceL', 'resource', {
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    resourceType: Projection.belongsTo('resource-type', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
