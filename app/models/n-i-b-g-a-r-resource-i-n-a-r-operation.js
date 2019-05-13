import { Model as ARResourceINAROperationMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-a-r-resource-i-n-a-r-operation';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARResourceINAROperationMixin, {

});

defineProjections(Model);
export default Model;
