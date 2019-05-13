import { Serializer as ResourceProcessSerializer } from
  '../mixins/regenerated/serializers/b-g-resource-process';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ResourceProcessSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
