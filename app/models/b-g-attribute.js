import { Model as AttributeMixin, defineProjections } from
  '../mixins/regenerated/models/b-g-attribute';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, AttributeMixin, {

});

defineProjections(Model);
export default Model;
