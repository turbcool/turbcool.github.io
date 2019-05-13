import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  duration: DS.attr('number'),
  businessProcess: DS.belongsTo('n-i-b-g-business-process', { inverse: null, async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      businessProcess: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OperationE', 'n-i-b-g-operation', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    duration: Projection.attr('Duration'),
    businessProcess: Projection.belongsTo('n-i-b-g-business-process', 'Business process', {
      code: Projection.attr('Code')
    })
  });
  modelClass.defineProjection('OperationL', 'n-i-b-g-operation', {
    code: Projection.attr('Code'),
    name: Projection.attr('Name'),
    duration: Projection.attr('Duration'),
    businessProcess: Projection.belongsTo('n-i-b-g-business-process', 'Code', {
      code: Projection.attr('Code')
    }, { hidden: true })
  });
};
