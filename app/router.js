import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('a-r-attribute-l');
  this.route('a-r-attribute-e',
  { path: 'a-r-attribute-e/:id' });
  this.route('a-r-attribute-e.new',
  { path: 'a-r-attribute-e/new' });
  this.route('a-r-b-p-in-operation-l');
  this.route('a-r-b-p-in-operation-e',
  { path: 'a-r-b-p-in-operation-e/:id' });
  this.route('a-r-b-p-in-operation-e.new',
  { path: 'a-r-b-p-in-operation-e/new' });
  this.route('a-r-business-process-l');
  this.route('a-r-business-process-e',
  { path: 'a-r-business-process-e/:id' });
  this.route('a-r-business-process-e.new',
  { path: 'a-r-business-process-e/new' });
  this.route('a-r-instance-l');
  this.route('a-r-instance-e',
  { path: 'a-r-instance-e/:id' });
  this.route('a-r-instance-e.new',
  { path: 'a-r-instance-e/new' });
  this.route('a-r-operation-l');
  this.route('a-r-operation-e',
  { path: 'a-r-operation-e/:id' });
  this.route('a-r-operation-e.new',
  { path: 'a-r-operation-e/new' });
  this.route('a-r-resource-attribute-l');
  this.route('a-r-resource-attribute-e',
  { path: 'a-r-resource-attribute-e/:id' });
  this.route('a-r-resource-attribute-e.new',
  { path: 'a-r-resource-attribute-e/new' });
  this.route('a-r-resource-i-n-a-r-operation-l');
  this.route('a-r-resource-i-n-a-r-operation-e',
  { path: 'a-r-resource-i-n-a-r-operation-e/:id' });
  this.route('a-r-resource-i-n-a-r-operation-e.new',
  { path: 'a-r-resource-i-n-a-r-operation-e/new' });
  this.route('a-r-resource-l');
  this.route('a-r-resource-e',
  { path: 'a-r-resource-e/:id' });
  this.route('a-r-resource-e.new',
  { path: 'a-r-resource-e/new' });
  this.route('a-r-resource-type-l');
  this.route('a-r-resource-type-e',
  { path: 'a-r-resource-type-e/:id' });
  this.route('a-r-resource-type-e.new',
  { path: 'a-r-resource-type-e/new' });
  this.route('active-resource-l');
  this.route('active-resource-e',
  { path: 'active-resource-e/:id' });
  this.route('active-resource-e.new',
  { path: 'active-resource-e/new' });
  this.route('b-g-operation-l');
  this.route('b-g-operation-e',
  { path: 'b-g-operation-e/:id' });
  this.route('b-g-operation-e.new',
  { path: 'b-g-operation-e/new' });
  this.route('b-g-process-l');
  this.route('b-g-process-e',
  { path: 'b-g-process-e/:id' });
  this.route('b-g-process-e.new',
  { path: 'b-g-process-e/new' });
  this.route('b-g-res-type-l');
  this.route('b-g-res-type-e',
  { path: 'b-g-res-type-e/:id' });
  this.route('b-g-res-type-e.new',
  { path: 'b-g-res-type-e/new' });
  this.route('b-g-resource-l');
  this.route('b-g-resource-e',
  { path: 'b-g-resource-e/:id' });
  this.route('b-g-resource-e.new',
  { path: 'b-g-resource-e/new' });
  this.route('b-g-resource-process-l');
  this.route('b-g-resource-process-e',
  { path: 'b-g-resource-process-e/:id' });
  this.route('b-g-resource-process-e.new',
  { path: 'b-g-resource-process-e/new' });
  this.route('business-process-l');
  this.route('business-process-e',
  { path: 'business-process-e/:id' });
  this.route('business-process-e.new',
  { path: 'business-process-e/new' });
  this.route('n-i-b-g-a-r-attribute-l');
  this.route('n-i-b-g-a-r-attribute-e',
  { path: 'n-i-b-g-a-r-attribute-e/:id' });
  this.route('n-i-b-g-a-r-attribute-e.new',
  { path: 'n-i-b-g-a-r-attribute-e/new' });
  this.route('n-i-b-g-a-r-b-p-in-operation-l');
  this.route('n-i-b-g-a-r-b-p-in-operation-e',
  { path: 'n-i-b-g-a-r-b-p-in-operation-e/:id' });
  this.route('n-i-b-g-a-r-b-p-in-operation-e.new',
  { path: 'n-i-b-g-a-r-b-p-in-operation-e/new' });
  this.route('n-i-b-g-a-r-business-process-l');
  this.route('n-i-b-g-a-r-business-process-e',
  { path: 'n-i-b-g-a-r-business-process-e/:id' });
  this.route('n-i-b-g-a-r-business-process-e.new',
  { path: 'n-i-b-g-a-r-business-process-e/new' });
  this.route('n-i-b-g-a-r-in-operation-l');
  this.route('n-i-b-g-a-r-in-operation-e',
  { path: 'n-i-b-g-a-r-in-operation-e/:id' });
  this.route('n-i-b-g-a-r-in-operation-e.new',
  { path: 'n-i-b-g-a-r-in-operation-e/new' });
  this.route('n-i-b-g-a-r-instance-l');
  this.route('n-i-b-g-a-r-instance-e',
  { path: 'n-i-b-g-a-r-instance-e/:id' });
  this.route('n-i-b-g-a-r-instance-e.new',
  { path: 'n-i-b-g-a-r-instance-e/new' });
  this.route('n-i-b-g-a-r-operation-l');
  this.route('n-i-b-g-a-r-operation-e',
  { path: 'n-i-b-g-a-r-operation-e/:id' });
  this.route('n-i-b-g-a-r-operation-e.new',
  { path: 'n-i-b-g-a-r-operation-e/new' });
  this.route('n-i-b-g-a-r-resource-attribute-l');
  this.route('n-i-b-g-a-r-resource-attribute-e',
  { path: 'n-i-b-g-a-r-resource-attribute-e/:id' });
  this.route('n-i-b-g-a-r-resource-attribute-e.new',
  { path: 'n-i-b-g-a-r-resource-attribute-e/new' });
  this.route('n-i-b-g-a-r-resource-i-n-a-r-operation-l');
  this.route('n-i-b-g-a-r-resource-i-n-a-r-operation-e',
  { path: 'n-i-b-g-a-r-resource-i-n-a-r-operation-e/:id' });
  this.route('n-i-b-g-a-r-resource-i-n-a-r-operation-e.new',
  { path: 'n-i-b-g-a-r-resource-i-n-a-r-operation-e/new' });
  this.route('n-i-b-g-a-r-resource-l');
  this.route('n-i-b-g-a-r-resource-e',
  { path: 'n-i-b-g-a-r-resource-e/:id' });
  this.route('n-i-b-g-a-r-resource-e.new',
  { path: 'n-i-b-g-a-r-resource-e/new' });
  this.route('n-i-b-g-a-r-resource-type-l');
  this.route('n-i-b-g-a-r-resource-type-e',
  { path: 'n-i-b-g-a-r-resource-type-e/:id' });
  this.route('n-i-b-g-a-r-resource-type-e.new',
  { path: 'n-i-b-g-a-r-resource-type-e/new' });
  this.route('n-i-b-g-active-resource-l');
  this.route('n-i-b-g-active-resource-e',
  { path: 'n-i-b-g-active-resource-e/:id' });
  this.route('n-i-b-g-active-resource-e.new',
  { path: 'n-i-b-g-active-resource-e/new' });
  this.route('n-i-b-g-active-resource-type-l');
  this.route('n-i-b-g-active-resource-type-e',
  { path: 'n-i-b-g-active-resource-type-e/:id' });
  this.route('n-i-b-g-active-resource-type-e.new',
  { path: 'n-i-b-g-active-resource-type-e/new' });
  this.route('n-i-b-g-active-resources-l');
  this.route('n-i-b-g-active-resources-e',
  { path: 'n-i-b-g-active-resources-e/:id' });
  this.route('n-i-b-g-active-resources-e.new',
  { path: 'n-i-b-g-active-resources-e/new' });
  this.route('n-i-b-g-business-process-l');
  this.route('n-i-b-g-business-process-e',
  { path: 'n-i-b-g-business-process-e/:id' });
  this.route('n-i-b-g-business-process-e.new',
  { path: 'n-i-b-g-business-process-e/new' });
  this.route('n-i-b-g-operation-l');
  this.route('n-i-b-g-operation-e',
  { path: 'n-i-b-g-operation-e/:id' });
  this.route('n-i-b-g-operation-e.new',
  { path: 'n-i-b-g-operation-e/new' });
  this.route('n-i-b-g-resource-attribute-l');
  this.route('n-i-b-g-resource-attribute-e',
  { path: 'n-i-b-g-resource-attribute-e/:id' });
  this.route('n-i-b-g-resource-attribute-e.new',
  { path: 'n-i-b-g-resource-attribute-e/new' });
  this.route('n-i-b-g-resource-in-a-r-operation-l');
  this.route('n-i-b-g-resource-in-a-r-operation-e',
  { path: 'n-i-b-g-resource-in-a-r-operation-e/:id' });
  this.route('n-i-b-g-resource-in-a-r-operation-e.new',
  { path: 'n-i-b-g-resource-in-a-r-operation-e/new' });
  this.route('n-i-b-g-resource-in-operation-l');
  this.route('n-i-b-g-resource-in-operation-e',
  { path: 'n-i-b-g-resource-in-operation-e/:id' });
  this.route('n-i-b-g-resource-in-operation-e.new',
  { path: 'n-i-b-g-resource-in-operation-e/new' });
  this.route('n-i-b-g-resource-l');
  this.route('n-i-b-g-resource-e',
  { path: 'n-i-b-g-resource-e/:id' });
  this.route('n-i-b-g-resource-e.new',
  { path: 'n-i-b-g-resource-e/new' });
  this.route('n-i-b-g-resource-type-l');
  this.route('n-i-b-g-resource-type-e',
  { path: 'n-i-b-g-resource-type-e/:id' });
  this.route('n-i-b-g-resource-type-e.new',
  { path: 'n-i-b-g-resource-type-e/new' });
  this.route('operation-l');
  this.route('operation-e',
  { path: 'operation-e/:id' });
  this.route('operation-e.new',
  { path: 'operation-e/new' });
  this.route('resource-attribute-l');
  this.route('resource-attribute-e',
  { path: 'resource-attribute-e/:id' });
  this.route('resource-attribute-e.new',
  { path: 'resource-attribute-e/new' });
  this.route('resource-in-a-r-operation-l');
  this.route('resource-in-a-r-operation-e',
  { path: 'resource-in-a-r-operation-e/:id' });
  this.route('resource-in-a-r-operation-e.new',
  { path: 'resource-in-a-r-operation-e/new' });
  this.route('resource-in-operation-l');
  this.route('resource-in-operation-e',
  { path: 'resource-in-operation-e/:id' });
  this.route('resource-in-operation-e.new',
  { path: 'resource-in-operation-e/new' });
  this.route('resource-l');
  this.route('resource-e',
  { path: 'resource-e/:id' });
  this.route('resource-e.new',
  { path: 'resource-e/new' });
  this.route('resource-type-l');
  this.route('resource-type-e',
  { path: 'resource-type-e/:id' });
  this.route('resource-type-e.new',
  { path: 'resource-type-e/new' });
  this.route('game');
});

export default Router;
