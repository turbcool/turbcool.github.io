import { Model as ResourceAttributeMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-resource-attribute';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ResourceAttributeMixin, {

});

defineProjections(Model);
export default Model;
