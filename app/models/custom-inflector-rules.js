import Inflector from 'ember-inflector';

const inflector = Inflector.inflector;

inflector.irregular('attribute', 'Attributes');
inflector.irregular('operation', 'Operations');
inflector.irregular('resources', 'Resourcess');
inflector.irregular('resource', 'Resources');
inflector.irregular('instance', 'Instances');
inflector.irregular('process', 'Processs');
inflector.irregular('type', 'Types');

export default {};
