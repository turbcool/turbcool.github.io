import { Model as ActiveResourcesMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-active-resources';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, ActiveResourcesMixin, {

});

defineProjections(Model);
export default Model;
