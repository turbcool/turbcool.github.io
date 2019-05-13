import { Serializer as ARBusinessProcessSerializer } from
  '../mixins/regenerated/serializers/n-i-b-g-a-r-business-process';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ARBusinessProcessSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
