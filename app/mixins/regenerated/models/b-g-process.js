import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  name: DS.attr('string'),
  time: DS.attr('number', { defaultValue: 1 }),
  operation: DS.hasMany('b-g-operation', { inverse: 'process', async: false }),
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
  modelClass.defineProjection('ProcessE', 'b-g-process', {
    code: Projection.attr('Код процесса'),
    name: Projection.attr('Название'),
    time: Projection.attr('Время выполнения (ч)'),
    operation: Projection.hasMany('b-g-operation', '', {
      order: Projection.attr('Порядковый номер выполнения'),
      formula: Projection.attr('Применяемая формула'),
      process: Projection.belongsTo('b-g-process', 'Связанный процесс', {
        name: Projection.attr('Название процесса')
      }, { displayMemberPath: 'name' })
    })
  });
  modelClass.defineProjection('ProcessL', 'b-g-process', {
    code: Projection.attr('Код процесса'),
    name: Projection.attr('Название'),
    time: Projection.attr('Время выполнения (ч)')
  });
};
