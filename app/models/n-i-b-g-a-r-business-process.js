import { Model as ARBusinessProcessMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-a-r-business-process';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARBusinessProcessMixin, {

});

defineProjections(Model);
export default Model;
