import { Model as ARBPInOperationMixin, defineProjections } from
  '../mixins/regenerated/models/a-r-b-p-in-operation';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARBPInOperationMixin, {

});

defineProjections(Model);
export default Model;
