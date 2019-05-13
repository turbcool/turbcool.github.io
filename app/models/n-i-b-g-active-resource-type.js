import { Model as ActiveResourceTypeMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-active-resource-type';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ActiveResourceTypeMixin, {

});

defineProjections(Model);
export default Model;
