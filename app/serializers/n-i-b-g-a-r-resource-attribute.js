import { Serializer as ARResourceAttributeSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-a-r-resource-attribute';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARResourceAttributeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
