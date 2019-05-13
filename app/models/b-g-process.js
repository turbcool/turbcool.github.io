import { Model as ProcessMixin, defineProjections } from
  '../mixins/regenerated/models/b-g-process';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ProcessMixin, {

});

defineProjections(Model);
export default Model;
