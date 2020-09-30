import { localize } from '@lion/localize';
import {
  DefaultSuccess,
  IsDate,
  IsDateDisabled,
  MaxDate,
  MinDate,
  MinMaxDate,
  IsNumber,
  MaxNumber,
  MinMaxNumber,
  MinNumber,
  Required,
  EqualsLength,
  IsEmail,
  MaxLength,
  MinLength,
  MinMaxLength,
  Pattern,
} from '@lion/form-core';

/**
 * @typedef {object} MessageData
 * @property {*} [MessageData.modelValue]
 * @property {string} [MessageData.fieldName]
 * @property {*} [MessageData.formControl]
 * @property {string} [MessageData.type]
 * @property {Object.<string,?>} [MessageData.config]
 * @property {string} [MessageData.name]
 */

let loaded = false;

export function loadDefaultFeedbackMessages() {
  if (loaded === true) {
    return;
  }

  const forMessagesToBeReady = () =>
    localize.loadNamespace(
      {
        'lion-validate': /** @param {string} locale */ locale => {
          switch (locale) {
            case 'bg-BG':
              return import('../translations/bg-BG.js');
            case 'bg':
              return import('../translations/bg.js');
            case 'cs-CZ':
              return import('../translations/cs-CZ.js');
            case 'cs':
              return import('../translations/cs.js');
            case 'de-DE':
              return import('../translations/de-DE.js');
            case 'de':
              return import('../translations/de.js');
            case 'en-AU':
              return import('../translations/en-AU.js');
            case 'en-GB':
              return import('../translations/en-GB.js');
            case 'en-US':
              return import('../translations/en-US.js');
            case 'en-PH':
            case 'en':
              return import('../translations/en.js');
            case 'es-ES':
              return import('../translations/es-ES.js');
            case 'es':
              return import('../translations/es.js');
            case 'fr-FR':
              return import('../translations/fr-FR.js');
            case 'fr-BE':
              return import('../translations/fr-BE.js');
            case 'fr':
              return import('../translations/fr.js');
            case 'hu-HU':
              return import('../translations/hu-HU.js');
            case 'hu':
              return import('../translations/hu.js');
            case 'it-IT':
              return import('../translations/it-IT.js');
            case 'it':
              return import('../translations/it.js');
            case 'nl-BE':
              return import('../translations/nl-BE.js');
            case 'nl-NL':
              return import('../translations/nl-NL.js');
            case 'nl':
              return import('../translations/nl.js');
            case 'pl-PL':
              return import('../translations/pl-PL.js');
            case 'pl':
              return import('../translations/pl.js');
            case 'ro-RO':
              return import('../translations/ro-RO.js');
            case 'ro':
              return import('../translations/ro.js');
            case 'ru-RU':
              return import('../translations/ru-RU.js');
            case 'ru':
              return import('../translations/ru.js');
            case 'sk-SK':
              return import('../translations/sk-SK.js');
            case 'sk':
              return import('../translations/sk.js');
            case 'uk-UA':
              return import('../translations/uk-UA.js');
            case 'uk':
              return import('../translations/uk.js');
            case 'zh-CN':
            case 'zh':
              return import('../translations/zh.js');
            default:
              return import('../translations/en.js');
          }
        },
      },
      { locale: localize.locale },
    );

  /**
   * @param {MessageData} data
   * @returns {Promise<string|Node>}
   */
  const getLocalizedMessage = async data => {
    await forMessagesToBeReady();
    if (data) {
      return localize.msg(`lion-validate:${data.type}.${data.name}`, data);
    }
    return '';
  };

  /** @param {MessageData} data */
  Required.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  EqualsLength.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MinLength.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MaxLength.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MinMaxLength.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  Pattern.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  IsEmail.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  IsNumber.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MinNumber.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MaxNumber.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MinMaxNumber.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  IsDate.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MinDate.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MaxDate.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  MinMaxDate.getMessage = async data => getLocalizedMessage(data);
  /** @param {MessageData} data */
  IsDateDisabled.getMessage = async data => getLocalizedMessage(data);

  DefaultSuccess.getMessage = async data => {
    await forMessagesToBeReady();
    const randomKeys = localize.msg('lion-validate:success.RandomOk').split(',');
    const key = randomKeys[Math.floor(Math.random() * randomKeys.length)].trim();
    return localize.msg(`lion-validate:${key}`, data);
  };

  loaded = true;
}
