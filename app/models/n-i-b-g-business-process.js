import { Model as BusinessProcessMixin, defineProjections } from
  '../mixins/regenerated/models/n-i-b-g-business-process';
import { Projection } from 'ember-flexberry-data';
import { Offline } from 'ember-flexberry-data';
let Model = Projection.Model.extend(Offline.ModelMixin, BusinessProcessMixin, {

});

defineProjections(Model);
export default Model;
