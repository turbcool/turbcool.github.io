import { Model as ResourceTypeMixin, defineProjections } from
  '../mixins/regenerated/models/resource-type';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ResourceTypeMixin, {

});

defineProjections(Model);
export default Model;
