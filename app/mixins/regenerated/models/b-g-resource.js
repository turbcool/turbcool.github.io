import Ember from 'ember';
import DS from 'ember-data';
import { Projection } from 'ember-flexberry-data';
export let Model = Ember.Mixin.create({
  code: DS.attr('string'),
  keyname: DS.attr('string'),
  name: DS.attr('string'),
  resType: DS.belongsTo('b-g-res-type', { inverse: null, async: false }),
  attribute: DS.hasMany('b-g-attribute', { inverse: 'resource', async: false }),
  getValidations: function () {
    let parentValidations = this._super();
    let thisValidations = {
      resType: { presence: true }
    };
    return Ember.$.extend(true, {}, parentValidations, thisValidations);
  },
  init: function () {
    this.set('validations', this.getValidations());
    this._super.apply(this, arguments);
  }
});

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ResourceE', 'b-g-resource', {
    code: Projection.attr('Код'),
    keyname: Projection.attr('Ключевое имя'),
    name: Projection.attr('Название'),
    resType: Projection.belongsTo('b-g-res-type', 'Тип ресурса', {
      name: Projection.attr('Название типа ресурса', { hidden: true })
    }, { displayMemberPath: 'name' }),
    attribute: Projection.hasMany('b-g-attribute', 'Attribute', {
      keyname: Projection.attr('Ключ имя'),
      name: Projection.attr('Название'),
      value: Projection.attr('Значение')
    })
  });
  modelClass.defineProjection('ResourceL', 'b-g-resource', {
    code: Projection.attr('Код'),
    keyname: Projection.attr('Ключ имя'),
    name: Projection.attr('Название'),
    resType: Projection.belongsTo('b-g-res-type', 'Тип ресурса', {
      name: Projection.attr('Тип ресурса')
    }, { hidden: true })
  });
};
