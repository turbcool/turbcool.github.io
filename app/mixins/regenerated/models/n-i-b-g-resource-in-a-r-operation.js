import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  aROperation: DS.belongsTo('n-i-b-g-a-r-operation', { inverse: null, async: false }),
  resource: DS.belongsTo('n-i-b-g-resource', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      aROperation: { presence: true },
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
  modelClass.defineProjection('ResourceInAROperationE', 'n-i-b-g-resource-in-a-r-operation', {
    aROperation: Projection.belongsTo('n-i-b-g-a-r-operation', 'A r operation', {
      name: Projection.attr('Name')
    }),
    resource: Projection.belongsTo('n-i-b-g-resource', 'Resource', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ResourceInAROperationL', 'n-i-b-g-resource-in-a-r-operation', {
    aROperation: Projection.belongsTo('n-i-b-g-a-r-operation', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true }),
    resource: Projection.belongsTo('n-i-b-g-resource', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
