import { Serializer as ActiveResourceSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-active-resource';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ActiveResourceSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
