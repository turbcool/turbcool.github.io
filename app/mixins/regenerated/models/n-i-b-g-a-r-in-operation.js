import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  activeResource: DS.belongsTo('n-i-b-g-active-resource', { inverse: null, async: false }),
  operation: DS.belongsTo('n-i-b-g-operation', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      activeResource: { presence: true },
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
  modelClass.defineProjection('ARInOperationE', 'n-i-b-g-a-r-in-operation', {
    activeResource: Projection.belongsTo('n-i-b-g-active-resource', 'Active resource', {
      code: Projection.attr('Code')
    }),
    operation: Projection.belongsTo('n-i-b-g-operation', 'Operation', {
      code: Projection.attr('Code')
    })
  });
  modelClass.defineProjection('ARInOperationL', 'n-i-b-g-a-r-in-operation', {
    activeResource: Projection.belongsTo('n-i-b-g-active-resource', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true }),
    operation: Projection.belongsTo('n-i-b-g-operation', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true })
  });
};
