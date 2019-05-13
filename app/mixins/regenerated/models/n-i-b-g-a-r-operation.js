import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  duration: DS.attr('number'),
  aRBusinessProcess: DS.belongsTo('n-i-b-g-a-r-business-process', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      aRBusinessProcess: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('AROperationE', 'n-i-b-g-a-r-operation', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    duration: Projection.attr('Duration'),
    aRBusinessProcess: Projection.belongsTo('n-i-b-g-a-r-business-process', 'A r business process', {
      code: Projection.attr('Code')
    })
  });
  modelClass.defineProjection('AROperationL', 'n-i-b-g-a-r-operation', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    duration: Projection.attr('Duration'),
    aRBusinessProcess: Projection.belongsTo('n-i-b-g-a-r-business-process', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true })
  });
};
