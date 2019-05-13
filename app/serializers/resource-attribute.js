import { Serializer as ResourceAttributeSerializer } from
  '../mixins/regenerated/serializers/resource-attribute';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResourceAttributeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
