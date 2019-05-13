import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  resource: DS.belongsTo('resource', { inverse: null, async: false }),
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
  modelClass.defineProjection('ResourceAttributeE', 'resource-attribute', {
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    resource: Projection.belongsTo('resource', 'Resource', {
      name: Projection.attr('Name'),
      amount: Projection.attr('Amount')
    }, { displayMemberPath: 'name' })
  });
  modelClass.defineProjection('ResourceAttributeL', 'resource-attribute', {
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    resource: Projection.belongsTo('resource', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
