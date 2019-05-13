import { Serializer as ActiveResourcesSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-active-resources';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ActiveResourcesSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
