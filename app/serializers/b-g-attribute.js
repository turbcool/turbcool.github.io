import { Serializer as AttributeSerializer } from
  '../mixins/regenerated/serializers/b-g-attribute';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(AttributeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
