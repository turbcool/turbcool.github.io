import { Model as AROperationMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-a-r-operation';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, AROperationMixin, {

});

defineProjections(Model);
export default Model;
