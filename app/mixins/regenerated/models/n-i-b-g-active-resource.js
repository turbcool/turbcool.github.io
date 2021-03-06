import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
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
  modelClass.defineProjection('ActiveResourceE', 'n-i-b-g-active-resource', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name')
  });
  modelClass.defineProjection('ActiveResourceL', 'n-i-b-g-active-resource', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name')
  });
};
