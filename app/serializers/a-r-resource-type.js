import { Serializer as ARResourceTypeSerializer } from
  '../mixins/regenerated/serializers/a-r-resource-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARResourceTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
