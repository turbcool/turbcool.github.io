import { Serializer as ARAttributeSerializer } from
  '../mixins/regenerated/serializers/a-r-attribute';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARAttributeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
