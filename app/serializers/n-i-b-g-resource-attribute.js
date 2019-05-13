import { Serializer as ResourceAttributeSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-resource-attribute';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResourceAttributeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
