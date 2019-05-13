import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  name: DS.attr('string'),
  duration: DS.attr('date'),
  businessProcess: DS.belongsTo('business-process', { inverse: null, async: false }),
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
  modelClass.defineProjection('OperationE', 'operation', {
    name: Projection.attr('Name'),
    duration: Projection.attr('Duration'),
    businessProcess: Projection.belongsTo('business-process', 'Business process', {
      name: Projection.attr('Name')
    }, { displayMemberPath: 'name' })
  });
  modelClass.defineProjection('OperationL', 'operation', {
    name: Projection.attr('Name'),
    duration: Projection.attr('Duration'),
    businessProcess: Projection.belongsTo('business-process', 'Name', {
      name: Projection.attr('Name')
    }, { hidden: true })
  });
};
