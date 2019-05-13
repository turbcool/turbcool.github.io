import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  aROperation: DS.belongsTo('a-r-operation', { inverse: null, async: false }),
  activeResource: DS.belongsTo('active-resource', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      aROperation: { presence: true },
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
  modelClass.defineProjection('ARInstanceE', 'a-r-instance', {
    name: Projection.attr('Name'),
    aROperation: Projection.belongsTo('a-r-operation', 'A r operation', {
      name: Projection.attr('Name')
    }),
    activeResource: Projection.belongsTo('active-resource', 'Active resource', {
      name: Projection.attr('Name')
    })
  });
  modelClass.defineProjection('ARInstanceL', 'a-r-instance', {
    name: Projection.attr('Name'),
    aROperation: Projection.belongsTo('a-r-operation', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true }),
    activeResource: Projection.belongsTo('active-resource', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
