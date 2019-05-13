import { Serializer as ResourceSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-resource';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResourceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
