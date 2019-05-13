import { Serializer as AROperationSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-a-r-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AROperationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
