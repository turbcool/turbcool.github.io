import { Serializer as ARInOperationSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-a-r-in-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARInOperationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
