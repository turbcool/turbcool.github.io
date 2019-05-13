import { Serializer as ActiveResourceTypeSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-active-resource-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ActiveResourceTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
