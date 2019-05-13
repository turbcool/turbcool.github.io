import { Model as ARAttributeMixin, defineProjections } from
  '../mixins/regenerated/models/a-r-attribute';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARAttributeMixin, {

});

defineProjections(Model);
export default Model;
