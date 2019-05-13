import { Model as ARInstanceMixin, defineProjections } from
  '../mixins/regenerated/models/a-r-instance';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARInstanceMixin, {

});

defineProjections(Model);
export default Model;
