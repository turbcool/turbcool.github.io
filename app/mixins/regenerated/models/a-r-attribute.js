import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  amount: DS.attr('number'),
  activeResource: DS.belongsTo('active-resource', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      activeResource: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ARAttributeE', 'a-r-attribute', {
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    activeResource: Projection.belongsTo('active-resource', 'Active resource', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ARAttributeL', 'a-r-attribute', {
    name: Projection.attr('Name'),
    amount: Projection.attr('Amount'),
    activeResource: Projection.belongsTo('active-resource', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
