import { Serializer as ARResourceINAROperationSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-a-r-resource-i-n-a-r-operation';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARResourceINAROperationSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
