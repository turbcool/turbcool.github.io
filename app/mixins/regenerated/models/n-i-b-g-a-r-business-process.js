import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  lSA: DS.attr('string'),
  activeResource: DS.belongsTo('n-i-b-g-active-resource', { inverse: null, async: false }),
  aRInstance: DS.belongsTo('n-i-b-g-a-r-instance', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      activeResource: { presence: true },
      aRInstance: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ARBusinessProcessE', 'n-i-b-g-a-r-business-process', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    lSA: Projection.attr('LSA'),
    activeResource: Projection.belongsTo('n-i-b-g-active-resource', 'Active resource', {
      code: Projection.attr('Code')
    }),
    aRInstance: Projection.belongsTo('n-i-b-g-a-r-instance', 'Instance', {
      code: Projection.attr('')
    }, { displayMemberPath: 'code' })
  });
  modelClass.defineProjection('ARBusinessProcessL', 'n-i-b-g-a-r-business-process', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    lSA: Projection.attr('LSA'),
    activeResource: Projection.belongsTo('n-i-b-g-active-resource', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true })
  });
};
