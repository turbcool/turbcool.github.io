import { Model as ARInOperationMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-a-r-in-operation';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARInOperationMixin, {

});

defineProjections(Model);
export default Model;
