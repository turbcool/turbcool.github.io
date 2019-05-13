import { Serializer as BusinessProcessSerializer } from
  '../mixins/regenerated/serializers/business-process';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(BusinessProcessSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
