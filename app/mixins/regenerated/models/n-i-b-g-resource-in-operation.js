import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  resource: DS.belongsTo('n-i-b-g-resource', { inverse: null, async: false }),
  operation: DS.belongsTo('n-i-b-g-operation', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      resource: { presence: true },
      operation: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ResourceInOperationE', 'n-i-b-g-resource-in-operation', {
    resource: Projection.belongsTo('n-i-b-g-resource', 'Resource', {
      name: Projection.attr('Name')
    }),
    operation: Projection.belongsTo('n-i-b-g-operation', 'Operation', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ResourceInOperationL', 'n-i-b-g-resource-in-operation', {
    resource: Projection.belongsTo('n-i-b-g-resource', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true }),
    operation: Projection.belongsTo('n-i-b-g-operation', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
