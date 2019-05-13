import { moduleForModel, test } from 'ember-qunit';

moduleForModel('b-g-effect', 'Unit | Model | b-g-effect', {
  // Specify the other units that are required for this test.
  needs: [
    'model:b-g-attribute',
    'model:b-g-effect',
    'model:b-g-res-type',
    'model:b-g-resource'
  ]
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
