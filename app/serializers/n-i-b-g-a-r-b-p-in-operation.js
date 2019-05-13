import { Serializer as ARBPInOperationSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-a-r-b-p-in-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARBPInOperationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
