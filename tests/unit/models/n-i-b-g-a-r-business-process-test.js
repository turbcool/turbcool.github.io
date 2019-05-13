import { moduleForModel, test } from 'ember-qunit';

moduleForModel('n-i-b-g-a-r-business-process', 'Unit | Model | n-i-b-g-a-r-business-process', {
  // Specify the other units that are required for this test.
  needs: [
    'model:a-r-attribute',
    'model:a-r-b-p-in-operation',
    'model:a-r-business-process',
    'model:a-r-instance',
    'model:a-r-operation',
    'model:a-r-resource-attribute',
    'model:a-r-resource-i-n-a-r-operation',
    'model:a-r-resource-type',
    'model:a-r-resource',
    'model:active-resource',
    'model:b-g-attribute',
    'model:b-g-operation',
    'model:b-g-process',
    'model:b-g-res-type',
    'model:b-g-resource-process',
    'model:b-g-resource',
    'model:business-process',
    'model:n-i-b-g-a-r-attribute',
    'model:n-i-b-g-a-r-b-p-in-operation',
    'model:n-i-b-g-a-r-business-process',
    'model:n-i-b-g-a-r-in-operation',
    'model:n-i-b-g-a-r-instance',
    'model:n-i-b-g-a-r-operation',
    'model:n-i-b-g-a-r-resource-attribute',
    'model:n-i-b-g-a-r-resource-i-n-a-r-operation',
    'model:n-i-b-g-a-r-resource-type',
    'model:n-i-b-g-a-r-resource',
    'model:n-i-b-g-active-resource-type',
    'model:n-i-b-g-active-resource',
    'model:n-i-b-g-active-resources',
    'model:n-i-b-g-business-process',
    'model:n-i-b-g-operation',
    'model:n-i-b-g-resource-attribute',
    'model:n-i-b-g-resource-in-a-r-operation',
    'model:n-i-b-g-resource-in-operation',
    'model:n-i-b-g-resource-type',
    'model:n-i-b-g-resource',
    'model:operation',
    'model:resource-attribute',
    'model:resource-in-a-r-operation',
    'model:resource-in-operation',
    'model:resource-type',
    'model:resource'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
