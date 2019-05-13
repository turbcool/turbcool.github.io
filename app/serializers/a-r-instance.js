import { Serializer as ARInstanceSerializer } from
  '../mixins/regenerated/serializers/a-r-instance';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARInstanceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
