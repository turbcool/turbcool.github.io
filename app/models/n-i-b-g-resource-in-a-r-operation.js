import { Model as ResourceInAROperationMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-resource-in-a-r-operation';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ResourceInAROperationMixin, {

});

defineProjections(Model);
export default Model;
