import { Serializer as ResTypeSerializer } from
  '../mixins/regenerated/serializers/b-g-res-type';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResTypeSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
