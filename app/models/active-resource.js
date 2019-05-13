import { Model as ActiveResourceMixin, defineProjections } from
  '../mixins/regenerated/models/active-resource';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ActiveResourceMixin, {

});

defineProjections(Model);
export default Model;
