import { Model as ResourceProcessMixin, defineProjections } from
  '../mixins/regenerated/models/b-g-resource-process';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ResourceProcessMixin, {

});

defineProjections(Model);
export default Model;
