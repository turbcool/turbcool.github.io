import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  amount: DS.attr('number'),
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
  modelClass.defineProjection('ARResourceAttributeE', 'a-r-resource-attribute', {
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    aRResource: Projection.belongsTo('a-r-resource', 'A r resource', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ARResourceAttributeL', 'a-r-resource-attribute', {
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    aRResource: Projection.belongsTo('a-r-resource', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
