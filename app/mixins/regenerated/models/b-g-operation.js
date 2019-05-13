import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  order: DS.attr('number'),
  formula: DS.attr('string'),
  process: DS.belongsTo('b-g-process', { inverse: 'operation', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      process: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('OperationE', 'b-g-operation', {
    order: Projection.attr('Порядковый номер выполнения'),
    formula: Projection.attr('Применяемая формула'),
    process: Projection.belongsTo('b-g-process', 'Связанный процесс', {
      name: Projection.attr('Название процесса')
    }, { displayMemberPath: 'name' })
  });
  modelClass.defineProjection('OperationL', 'b-g-operation', {
    order: Projection.attr('Порядковый номер выполнения'),
    formula: Projection.attr('Применяемая формула'),
    process: Projection.belongsTo('b-g-process', 'Связанный процесс', {
      name: Projection.attr('Связанный процесс')
    }, { hidden: true })
  });
};
