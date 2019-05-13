import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  keyname: DS.attr('string'),
  name: DS.attr('string'),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ResTypeE', 'b-g-res-type', {
    code: Projection.attr('Код'),
    keyname: Projection.attr('Ключ имя'),
    name: Projection.attr('Название типа ресурса')
  });
  modelClass.defineProjection('ResTypeL', 'b-g-res-type', {
    code: Projection.attr('Код'),
    keyname: Projection.attr('Ключ имя'),
    name: Projection.attr('Название типа ресурса')
  });
};
