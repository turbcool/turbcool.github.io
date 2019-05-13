import { Model as ARResourceAttributeMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-a-r-resource-attribute';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ARResourceAttributeMixin, {

});

defineProjections(Model);
export default Model;
