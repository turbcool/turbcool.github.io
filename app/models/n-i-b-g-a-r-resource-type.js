import { Model as ARResourceTypeMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-a-r-resource-type';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARResourceTypeMixin, {

});

defineProjections(Model);
export default Model;
