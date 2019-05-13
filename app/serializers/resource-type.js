import { Serializer as ResourceTypeSerializer } from
  '../mixins/regenerated/serializers/resource-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResourceTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
