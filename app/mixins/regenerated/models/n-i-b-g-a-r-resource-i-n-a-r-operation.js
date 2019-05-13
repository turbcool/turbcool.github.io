import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  aRResource: DS.belongsTo('n-i-b-g-a-r-resource', { inverse: null, async: false }),
  aROperation: DS.belongsTo('n-i-b-g-a-r-operation', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      aRResource: { presence: true },
      aROperation: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ARResourceINAROperationE', 'n-i-b-g-a-r-resource-i-n-a-r-operation', {
    aRResource: Projection.belongsTo('n-i-b-g-a-r-resource', 'A r resource', {
      name: Projection.attr('Name')
    }),
    aROperation: Projection.belongsTo('n-i-b-g-a-r-operation', 'A r operation', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ARResourceINAROperationL', 'n-i-b-g-a-r-resource-i-n-a-r-operation', {
    aRResource: Projection.belongsTo('n-i-b-g-a-r-resource', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true }),
    aROperation: Projection.belongsTo('n-i-b-g-a-r-operation', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
