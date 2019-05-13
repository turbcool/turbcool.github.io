import { Serializer as OperationSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(OperationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
