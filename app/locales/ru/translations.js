import Ember from 'ember';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import ARAttributeLForm from './forms/a-r-attribute-l';
import ARBPInOperationLForm from './forms/a-r-b-p-in-operation-l';
import ARBusinessProcessLForm from './forms/a-r-business-process-l';
import ARInstanceLForm from './forms/a-r-instance-l';
import AROperationLForm from './forms/a-r-operation-l';
import ARResourceAttributeLForm from './forms/a-r-resource-attribute-l';
import ARResourceINAROperationLForm from './forms/a-r-resource-i-n-a-r-operation-l';
import ARResourceLForm from './forms/a-r-resource-l';
import ARResourceTypeLForm from './forms/a-r-resource-type-l';
import ActiveResourceLForm from './forms/active-resource-l';
import BGOperationLForm from './forms/b-g-operation-l';
import BGProcessLForm from './forms/b-g-process-l';
import BGResTypeLForm from './forms/b-g-res-type-l';
import BGResourceLForm from './forms/b-g-resource-l';
import BGResourceProcessLForm from './forms/b-g-resource-process-l';
import BusinessProcessLForm from './forms/business-process-l';
import NIBGARAttributeLForm from './forms/n-i-b-g-a-r-attribute-l';
import NIBGARBPInOperationLForm from './forms/n-i-b-g-a-r-b-p-in-operation-l';
import NIBGARBusinessProcessLForm from './forms/n-i-b-g-a-r-business-process-l';
import NIBGARInOperationLForm from './forms/n-i-b-g-a-r-in-operation-l';
import NIBGARInstanceLForm from './forms/n-i-b-g-a-r-instance-l';
import NIBGAROperationLForm from './forms/n-i-b-g-a-r-operation-l';
import NIBGARResourceAttributeLForm from './forms/n-i-b-g-a-r-resource-attribute-l';
import NIBGARResourceINAROperationLForm from './forms/n-i-b-g-a-r-resource-i-n-a-r-operation-l';
import NIBGARResourceLForm from './forms/n-i-b-g-a-r-resource-l';
import NIBGARResourceTypeLForm from './forms/n-i-b-g-a-r-resource-type-l';
import NIBGActiveResourceLForm from './forms/n-i-b-g-active-resource-l';
import NIBGActiveResourceTypeLForm from './forms/n-i-b-g-active-resource-type-l';
import NIBGActiveResourcesLForm from './forms/n-i-b-g-active-resources-l';
import NIBGBusinessProcessLForm from './forms/n-i-b-g-business-process-l';
import NIBGOperationLForm from './forms/n-i-b-g-operation-l';
import NIBGResourceAttributeLForm from './forms/n-i-b-g-resource-attribute-l';
import NIBGResourceInAROperationLForm from './forms/n-i-b-g-resource-in-a-r-operation-l';
import NIBGResourceInOperationLForm from './forms/n-i-b-g-resource-in-operation-l';
import NIBGResourceLForm from './forms/n-i-b-g-resource-l';
import NIBGResourceTypeLForm from './forms/n-i-b-g-resource-type-l';
import OperationLForm from './forms/operation-l';
import ResourceAttributeLForm from './forms/resource-attribute-l';
import ResourceInAROperationLForm from './forms/resource-in-a-r-operation-l';
import ResourceInOperationLForm from './forms/resource-in-operation-l';
import ResourceLForm from './forms/resource-l';
import ResourceTypeLForm from './forms/resource-type-l';
import ARAttributeEForm from './forms/a-r-attribute-e';
import ARBPInOperationEForm from './forms/a-r-b-p-in-operation-e';
import ARBusinessProcessEForm from './forms/a-r-business-process-e';
import ARInstanceEForm from './forms/a-r-instance-e';
import AROperationEForm from './forms/a-r-operation-e';
import ARResourceAttributeEForm from './forms/a-r-resource-attribute-e';
import ARResourceEForm from './forms/a-r-resource-e';
import ARResourceINAROperationEForm from './forms/a-r-resource-i-n-a-r-operation-e';
import ARResourceTypeEForm from './forms/a-r-resource-type-e';
import ActiveResourceEForm from './forms/active-resource-e';
import BGOperationEForm from './forms/b-g-operation-e';
import BGProcessEForm from './forms/b-g-process-e';
import BGResTypeEForm from './forms/b-g-res-type-e';
import BGResourceEForm from './forms/b-g-resource-e';
import BGResourceProcessEForm from './forms/b-g-resource-process-e';
import BusinessProcessEForm from './forms/business-process-e';
import NIBGARAttributeEForm from './forms/n-i-b-g-a-r-attribute-e';
import NIBGARBPInOperationEForm from './forms/n-i-b-g-a-r-b-p-in-operation-e';
import NIBGARBusinessProcessEForm from './forms/n-i-b-g-a-r-business-process-e';
import NIBGARInOperationEForm from './forms/n-i-b-g-a-r-in-operation-e';
import NIBGARInstanceEForm from './forms/n-i-b-g-a-r-instance-e';
import NIBGAROperationEForm from './forms/n-i-b-g-a-r-operation-e';
import NIBGARResourceAttributeEForm from './forms/n-i-b-g-a-r-resource-attribute-e';
import NIBGARResourceEForm from './forms/n-i-b-g-a-r-resource-e';
import NIBGARResourceINAROperationEForm from './forms/n-i-b-g-a-r-resource-i-n-a-r-operation-e';
import NIBGARResourceTypeEForm from './forms/n-i-b-g-a-r-resource-type-e';
import NIBGActiveResourceEForm from './forms/n-i-b-g-active-resource-e';
import NIBGActiveResourceTypeEForm from './forms/n-i-b-g-active-resource-type-e';
import NIBGActiveResourcesEForm from './forms/n-i-b-g-active-resources-e';
import NIBGBusinessProcessEForm from './forms/n-i-b-g-business-process-e';
import NIBGOperationEForm from './forms/n-i-b-g-operation-e';
import NIBGResourceAttributeEForm from './forms/n-i-b-g-resource-attribute-e';
import NIBGResourceEForm from './forms/n-i-b-g-resource-e';
import NIBGResourceInAROperationEForm from './forms/n-i-b-g-resource-in-a-r-operation-e';
import NIBGResourceInOperationEForm from './forms/n-i-b-g-resource-in-operation-e';
import NIBGResourceTypeEForm from './forms/n-i-b-g-resource-type-e';
import OperationEForm from './forms/operation-e';
import ResourceAttributeEForm from './forms/resource-attribute-e';
import ResourceEForm from './forms/resource-e';
import ResourceInAROperationEForm from './forms/resource-in-a-r-operation-e';
import ResourceInOperationEForm from './forms/resource-in-operation-e';
import ResourceTypeEForm from './forms/resource-type-e';
import ARAttributeModel from './models/a-r-attribute';
import ARBPInOperationModel from './models/a-r-b-p-in-operation';
import ARBusinessProcessModel from './models/a-r-business-process';
import ARInstanceModel from './models/a-r-instance';
import AROperationModel from './models/a-r-operation';
import ARResourceAttributeModel from './models/a-r-resource-attribute';
import ARResourceINAROperationModel from './models/a-r-resource-i-n-a-r-operation';
import ARResourceTypeModel from './models/a-r-resource-type';
import ARResourceModel from './models/a-r-resource';
import ActiveResourceModel from './models/active-resource';
import BGAttributeModel from './models/b-g-attribute';
import BGOperationModel from './models/b-g-operation';
import BGProcessModel from './models/b-g-process';
import BGResTypeModel from './models/b-g-res-type';
import BGResourceProcessModel from './models/b-g-resource-process';
import BGResourceModel from './models/b-g-resource';
import BusinessProcessModel from './models/business-process';
import NIBGARAttributeModel from './models/n-i-b-g-a-r-attribute';
import NIBGARBPInOperationModel from './models/n-i-b-g-a-r-b-p-in-operation';
import NIBGARBusinessProcessModel from './models/n-i-b-g-a-r-business-process';
import NIBGARInOperationModel from './models/n-i-b-g-a-r-in-operation';
import NIBGARInstanceModel from './models/n-i-b-g-a-r-instance';
import NIBGAROperationModel from './models/n-i-b-g-a-r-operation';
import NIBGARResourceAttributeModel from './models/n-i-b-g-a-r-resource-attribute';
import NIBGARResourceINAROperationModel from './models/n-i-b-g-a-r-resource-i-n-a-r-operation';
import NIBGARResourceTypeModel from './models/n-i-b-g-a-r-resource-type';
import NIBGARResourceModel from './models/n-i-b-g-a-r-resource';
import NIBGActiveResourceTypeModel from './models/n-i-b-g-active-resource-type';
import NIBGActiveResourceModel from './models/n-i-b-g-active-resource';
import NIBGActiveResourcesModel from './models/n-i-b-g-active-resources';
import NIBGBusinessProcessModel from './models/n-i-b-g-business-process';
import NIBGOperationModel from './models/n-i-b-g-operation';
import NIBGResourceAttributeModel from './models/n-i-b-g-resource-attribute';
import NIBGResourceInAROperationModel from './models/n-i-b-g-resource-in-a-r-operation';
import NIBGResourceInOperationModel from './models/n-i-b-g-resource-in-operation';
import NIBGResourceTypeModel from './models/n-i-b-g-resource-type';
import NIBGResourceModel from './models/n-i-b-g-resource';
import OperationModel from './models/operation';
import ResourceAttributeModel from './models/resource-attribute';
import ResourceInAROperationModel from './models/resource-in-a-r-operation';
import ResourceInOperationModel from './models/resource-in-operation';
import ResourceTypeModel from './models/resource-type';
import ResourceModel from './models/resource';

const translations = {};
Ember.$.extend(true, translations, EmberFlexberryTranslations);

Ember.$.extend(true, translations, {
  models: {
    'a-r-attribute': ARAttributeModel,
    'a-r-b-p-in-operation': ARBPInOperationModel,
    'a-r-business-process': ARBusinessProcessModel,
    'a-r-instance': ARInstanceModel,
    'a-r-operation': AROperationModel,
    'a-r-resource-attribute': ARResourceAttributeModel,
    'a-r-resource-i-n-a-r-operation': ARResourceINAROperationModel,
    'a-r-resource-type': ARResourceTypeModel,
    'a-r-resource': ARResourceModel,
    'active-resource': ActiveResourceModel,
    'b-g-attribute': BGAttributeModel,
    'b-g-operation': BGOperationModel,
    'b-g-process': BGProcessModel,
    'b-g-res-type': BGResTypeModel,
    'b-g-resource-process': BGResourceProcessModel,
    'b-g-resource': BGResourceModel,
    'business-process': BusinessProcessModel,
    'n-i-b-g-a-r-attribute': NIBGARAttributeModel,
    'n-i-b-g-a-r-b-p-in-operation': NIBGARBPInOperationModel,
    'n-i-b-g-a-r-business-process': NIBGARBusinessProcessModel,
    'n-i-b-g-a-r-in-operation': NIBGARInOperationModel,
    'n-i-b-g-a-r-instance': NIBGARInstanceModel,
    'n-i-b-g-a-r-operation': NIBGAROperationModel,
    'n-i-b-g-a-r-resource-attribute': NIBGARResourceAttributeModel,
    'n-i-b-g-a-r-resource-i-n-a-r-operation': NIBGARResourceINAROperationModel,
    'n-i-b-g-a-r-resource-type': NIBGARResourceTypeModel,
    'n-i-b-g-a-r-resource': NIBGARResourceModel,
    'n-i-b-g-active-resource-type': NIBGActiveResourceTypeModel,
    'n-i-b-g-active-resource': NIBGActiveResourceModel,
    'n-i-b-g-active-resources': NIBGActiveResourcesModel,
    'n-i-b-g-business-process': NIBGBusinessProcessModel,
    'n-i-b-g-operation': NIBGOperationModel,
    'n-i-b-g-resource-attribute': NIBGResourceAttributeModel,
    'n-i-b-g-resource-in-a-r-operation': NIBGResourceInAROperationModel,
    'n-i-b-g-resource-in-operation': NIBGResourceInOperationModel,
    'n-i-b-g-resource-type': NIBGResourceTypeModel,
    'n-i-b-g-resource': NIBGResourceModel,
    'operation': OperationModel,
    'resource-attribute': ResourceAttributeModel,
    'resource-in-a-r-operation': ResourceInAROperationModel,
    'resource-in-operation': ResourceInOperationModel,
    'resource-type': ResourceTypeModel,
    'resource': ResourceModel,
  },

  'application-name': 'App',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            caption: '',
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'App',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'App',
          title: 'App'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        app: {
          caption: 'App',
          title: 'App',
          'n-i-b-g-business-process-l': {
            caption: 'Business process',
            title: ''
          },
          'n-i-b-g-resource-type-l': {
            caption: 'Resource type',
            title: ''
          },
          'n-i-b-g-active-resources-l': {
            caption: 'Active resources',
            title: ''
          },
          'n-i-b-g-a-r-attribute-l': {
            caption: 'A r attribute',
            title: ''
          },
          'n-i-b-g-a-r-business-process-l': {
            caption: 'A r business process',
            title: ''
          },
          'n-i-b-g-a-r-resource-l': {
            caption: 'A r resource',
            title: ''
          },
          'n-i-b-g-a-r-instance-l': {
            caption: 'A r instance',
            title: ''
          },
          'n-i-b-g-operation-l': {
            caption: 'Operation',
            title: ''
          },
          'n-i-b-g-resource-in-a-r-operation-l': {
            caption: 'Resource in a r operation',
            title: ''
          },
          'n-i-b-g-a-r-resource-attribute-l': {
            caption: 'A r resource attribute',
            title: ''
          },
          'n-i-b-g-resource-in-operation-l': {
            caption: 'Resource in operation',
            title: ''
          },
          'n-i-b-g-resource-attribute-l': {
            caption: 'Resource attribute',
            title: ''
          },
          'n-i-b-g-active-resource-l': {
            caption: 'Active resource',
            title: ''
          },
          'n-i-b-g-resource-l': {
            caption: 'Resource',
            title: ''
          },
          'n-i-b-g-a-r-resource-i-n-a-r-operation-l': {
            caption: 'A r resource i n a r operation',
            title: ''
          },
          'n-i-b-g-a-r-in-operation-l': {
            caption: 'A r in operation',
            title: ''
          },
          'n-i-b-g-a-r-resource-type-l': {
            caption: 'A r resource type',
            title: ''
          },
          'n-i-b-g-active-resource-type-l': {
            caption: 'Active resource type',
            title: ''
          },
          'n-i-b-g-a-r-operation-l': {
            caption: 'A r operation',
            title: ''
          }
        },
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'a-r-attribute-l': ARAttributeLForm,
    'a-r-b-p-in-operation-l': ARBPInOperationLForm,
    'a-r-business-process-l': ARBusinessProcessLForm,
    'a-r-instance-l': ARInstanceLForm,
    'a-r-operation-l': AROperationLForm,
    'a-r-resource-attribute-l': ARResourceAttributeLForm,
    'a-r-resource-i-n-a-r-operation-l': ARResourceINAROperationLForm,
    'a-r-resource-l': ARResourceLForm,
    'a-r-resource-type-l': ARResourceTypeLForm,
    'active-resource-l': ActiveResourceLForm,
    'b-g-operation-l': BGOperationLForm,
    'b-g-process-l': BGProcessLForm,
    'b-g-res-type-l': BGResTypeLForm,
    'b-g-resource-l': BGResourceLForm,
    'b-g-resource-process-l': BGResourceProcessLForm,
    'business-process-l': BusinessProcessLForm,
    'n-i-b-g-a-r-attribute-l': NIBGARAttributeLForm,
    'n-i-b-g-a-r-b-p-in-operation-l': NIBGARBPInOperationLForm,
    'n-i-b-g-a-r-business-process-l': NIBGARBusinessProcessLForm,
    'n-i-b-g-a-r-in-operation-l': NIBGARInOperationLForm,
    'n-i-b-g-a-r-instance-l': NIBGARInstanceLForm,
    'n-i-b-g-a-r-operation-l': NIBGAROperationLForm,
    'n-i-b-g-a-r-resource-attribute-l': NIBGARResourceAttributeLForm,
    'n-i-b-g-a-r-resource-i-n-a-r-operation-l': NIBGARResourceINAROperationLForm,
    'n-i-b-g-a-r-resource-l': NIBGARResourceLForm,
    'n-i-b-g-a-r-resource-type-l': NIBGARResourceTypeLForm,
    'n-i-b-g-active-resource-l': NIBGActiveResourceLForm,
    'n-i-b-g-active-resource-type-l': NIBGActiveResourceTypeLForm,
    'n-i-b-g-active-resources-l': NIBGActiveResourcesLForm,
    'n-i-b-g-business-process-l': NIBGBusinessProcessLForm,
    'n-i-b-g-operation-l': NIBGOperationLForm,
    'n-i-b-g-resource-attribute-l': NIBGResourceAttributeLForm,
    'n-i-b-g-resource-in-a-r-operation-l': NIBGResourceInAROperationLForm,
    'n-i-b-g-resource-in-operation-l': NIBGResourceInOperationLForm,
    'n-i-b-g-resource-l': NIBGResourceLForm,
    'n-i-b-g-resource-type-l': NIBGResourceTypeLForm,
    'operation-l': OperationLForm,
    'resource-attribute-l': ResourceAttributeLForm,
    'resource-in-a-r-operation-l': ResourceInAROperationLForm,
    'resource-in-operation-l': ResourceInOperationLForm,
    'resource-l': ResourceLForm,
    'resource-type-l': ResourceTypeLForm,
    'a-r-attribute-e': ARAttributeEForm,
    'a-r-b-p-in-operation-e': ARBPInOperationEForm,
    'a-r-business-process-e': ARBusinessProcessEForm,
    'a-r-instance-e': ARInstanceEForm,
    'a-r-operation-e': AROperationEForm,
    'a-r-resource-attribute-e': ARResourceAttributeEForm,
    'a-r-resource-e': ARResourceEForm,
    'a-r-resource-i-n-a-r-operation-e': ARResourceINAROperationEForm,
    'a-r-resource-type-e': ARResourceTypeEForm,
    'active-resource-e': ActiveResourceEForm,
    'b-g-operation-e': BGOperationEForm,
    'b-g-process-e': BGProcessEForm,
    'b-g-res-type-e': BGResTypeEForm,
    'b-g-resource-e': BGResourceEForm,
    'b-g-resource-process-e': BGResourceProcessEForm,
    'business-process-e': BusinessProcessEForm,
    'n-i-b-g-a-r-attribute-e': NIBGARAttributeEForm,
    'n-i-b-g-a-r-b-p-in-operation-e': NIBGARBPInOperationEForm,
    'n-i-b-g-a-r-business-process-e': NIBGARBusinessProcessEForm,
    'n-i-b-g-a-r-in-operation-e': NIBGARInOperationEForm,
    'n-i-b-g-a-r-instance-e': NIBGARInstanceEForm,
    'n-i-b-g-a-r-operation-e': NIBGAROperationEForm,
    'n-i-b-g-a-r-resource-attribute-e': NIBGARResourceAttributeEForm,
    'n-i-b-g-a-r-resource-e': NIBGARResourceEForm,
    'n-i-b-g-a-r-resource-i-n-a-r-operation-e': NIBGARResourceINAROperationEForm,
    'n-i-b-g-a-r-resource-type-e': NIBGARResourceTypeEForm,
    'n-i-b-g-active-resource-e': NIBGActiveResourceEForm,
    'n-i-b-g-active-resource-type-e': NIBGActiveResourceTypeEForm,
    'n-i-b-g-active-resources-e': NIBGActiveResourcesEForm,
    'n-i-b-g-business-process-e': NIBGBusinessProcessEForm,
    'n-i-b-g-operation-e': NIBGOperationEForm,
    'n-i-b-g-resource-attribute-e': NIBGResourceAttributeEForm,
    'n-i-b-g-resource-e': NIBGResourceEForm,
    'n-i-b-g-resource-in-a-r-operation-e': NIBGResourceInAROperationEForm,
    'n-i-b-g-resource-in-operation-e': NIBGResourceInOperationEForm,
    'n-i-b-g-resource-type-e': NIBGResourceTypeEForm,
    'operation-e': OperationEForm,
    'resource-attribute-e': ResourceAttributeEForm,
    'resource-e': ResourceEForm,
    'resource-in-a-r-operation-e': ResourceInAROperationEForm,
    'resource-in-operation-e': ResourceInOperationEForm,
    'resource-type-e': ResourceTypeEForm,
  },

});

export default translations;
