import { Model as ResTypeMixin, defineProjections } from
  '../mixins/regenerated/models/b-g-res-type';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ResTypeMixin, {

});

defineProjections(Model);
export default Model;
