import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  lSA: DS.attr('string'),
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
  modelClass.defineProjection('BusinessProcessE', 'n-i-b-g-business-process', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    lSA: Projection.attr('LSA')
  });
  modelClass.defineProjection('BusinessProcessL', 'n-i-b-g-business-process', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    lSA: Projection.attr('LSA')
  });
};
