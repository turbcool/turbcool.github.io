import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
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
  modelClass.defineProjection('BusinessProcessE', 'business-process', {
    name: Projection.attr('Name'),
    lSA: Projection.attr('LSA')
  });
  modelClass.defineProjection('BusinessProcessL', 'business-process', {
    name: Projection.attr('Name'),
    lSA: Projection.attr('LSA')
  });
};
