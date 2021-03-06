import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  aRResource: DS.belongsTo('a-r-resource', { inverse: null, async: false }),
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
  modelClass.defineProjection('ARResourceTypeE', 'a-r-resource-type', {
    name: Projection.attr('Name'),
    aRResource: Projection.belongsTo('a-r-resource', 'A r resource', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ARResourceTypeL', 'a-r-resource-type', {
    name: Projection.attr('Name'),
    aRResource: Projection.belongsTo('a-r-resource', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
