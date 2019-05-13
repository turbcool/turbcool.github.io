import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  activeResource: DS.belongsTo('n-i-b-g-active-resource', { inverse: null, async: false }),
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
  modelClass.defineProjection('ARInstanceE', 'n-i-b-g-a-r-instance', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    activeResource: Projection.belongsTo('n-i-b-g-active-resource', '', {
      code: Projection.attr('', { hidden: true })
    }, { displayMemberPath: 'code' })
  });
  modelClass.defineProjection('ARInstanceL', 'n-i-b-g-a-r-instance', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    activeResource: Projection.belongsTo('n-i-b-g-active-resource', '', {
      code: Projection.attr('')
    }, { hidden: true })
  });
};
