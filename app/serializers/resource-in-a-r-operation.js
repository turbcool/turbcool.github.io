import { Serializer as ResourceInAROperationSerializer } from
  '../mixins/regenerated/serializers/resource-in-a-r-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResourceInAROperationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
