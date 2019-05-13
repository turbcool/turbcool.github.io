import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  keyname: DS.attr('string'),
  name: DS.attr('string'),
  value: DS.attr('number', { defaultValue: 0 }),
  resource: DS.belongsTo('b-g-resource', { inverse: 'attribute', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
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
  modelClass.defineProjection('AttributeE', 'b-g-attribute', {
    keyname: Projection.attr('Ключ имя'),
    name: Projection.attr('Название'),
    value: Projection.attr('Значение')
  });
};
