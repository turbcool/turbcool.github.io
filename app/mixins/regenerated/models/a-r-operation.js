import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  duration: DS.attr('date'),
  aRBusinessProcess: DS.belongsTo('a-r-business-process', { inverse: null, async: false }),
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
  modelClass.defineProjection('AROperationE', 'a-r-operation', {
    name: Projection.attr('Name'),
    duration: Projection.attr('Duration'),
    aRBusinessProcess: Projection.belongsTo('a-r-business-process', 'A r business process', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('AROperationL', 'a-r-operation', {
    name: Projection.attr('Name'),
    duration: Projection.attr('Duration'),
    aRBusinessProcess: Projection.belongsTo('a-r-business-process', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
