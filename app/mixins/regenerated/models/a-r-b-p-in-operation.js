import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  aRBusinessProcess: DS.belongsTo('a-r-business-process', { inverse: null, async: false }),
  operation: DS.belongsTo('operation', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      aRBusinessProcess: { presence: true },
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
  modelClass.defineProjection('ARBPInOperationE', 'a-r-b-p-in-operation', {
    aRBusinessProcess: Projection.belongsTo('a-r-business-process', 'A r business process', {
      name: Projection.attr('Name')
    }),
    operation: Projection.belongsTo('operation', 'Operation', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ARBPInOperationL', 'a-r-b-p-in-operation', {
    aRBusinessProcess: Projection.belongsTo('a-r-business-process', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true }),
    operation: Projection.belongsTo('operation', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
