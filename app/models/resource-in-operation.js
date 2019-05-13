import { Model as ResourceInOperationMixin, defineProjections } from
  '../mixins/regenerated/models/resource-in-operation';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ResourceInOperationMixin, {

});

defineProjections(Model);
export default Model;
