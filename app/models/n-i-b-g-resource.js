import { Model as ResourceMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-resource';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ResourceMixin, {

});

defineProjections(Model);
export default Model;
