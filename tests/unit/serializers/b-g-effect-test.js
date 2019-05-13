import { moduleForModel, test } from 'ember-qunit';

moduleForModel('b-g-effect', 'Unit | Serializer | b-g-effect', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:b-g-effect',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:b-g-attribute',
    'model:b-g-effect',
    'model:b-g-res-type',
    'model:b-g-resource'
  ]
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
