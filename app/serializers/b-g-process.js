import { Serializer as ProcessSerializer } from
  '../mixins/regenerated/serializers/b-g-process';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ProcessSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
