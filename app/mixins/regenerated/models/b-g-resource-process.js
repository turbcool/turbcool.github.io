import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  process: DS.belongsTo('b-g-process', { inverse: null, async: false }),
  resource: DS.belongsTo('b-g-resource', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      process: { presence: true },
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
  modelClass.defineProjection('ResourceProcessE', 'b-g-resource-process', {
    process: Projection.belongsTo('b-g-process', 'Process', {
      code: Projection.attr('Code')
    }),
    resource: Projection.belongsTo('b-g-resource', 'Resource', {
      code: Projection.attr('Code')
    })
  });
  modelClass.defineProjection('ResourceProcessL', 'b-g-resource-process', {
    process: Projection.belongsTo('b-g-process', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true }),
    resource: Projection.belongsTo('b-g-resource', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true })
  });
};
