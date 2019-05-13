import { Serializer as ResourceInOperationSerializer } from
  '../mixins/regenerated/serializers/resource-in-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResourceInOperationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
