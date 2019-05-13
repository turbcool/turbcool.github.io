import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  aRResource: DS.belongsTo('n-i-b-g-a-r-resource', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      aRResource: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ARResourceTypeE', 'n-i-b-g-a-r-resource-type', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    aRResource: Projection.belongsTo('n-i-b-g-a-r-resource', 'A r resource', {
      code: Projection.attr('Code')
    })
  });
  modelClass.defineProjection('ARResourceTypeL', 'n-i-b-g-a-r-resource-type', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    aRResource: Projection.belongsTo('n-i-b-g-a-r-resource', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true })
  });
};
