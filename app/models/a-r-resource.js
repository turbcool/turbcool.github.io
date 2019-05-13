import { Model as ARResourceMixin, defineProjections } from
  '../mixins/regenerated/models/a-r-resource';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARResourceMixin, {

});

defineProjections(Model);
export default Model;
