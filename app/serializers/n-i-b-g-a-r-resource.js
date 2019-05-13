import { Serializer as ARResourceSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-a-r-resource';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARResourceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
