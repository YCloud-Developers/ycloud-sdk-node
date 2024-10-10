/* tslint:disable */
/* eslint-disable */
/**
 * YCloud API
 * The [YCloud](https://ycloud.com) API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Our API is designed to have predictable, resource-oriented URLs, return [JSON](https://www.json.org) responses, and use standard HTTP response codes and verbs.
 *
 * The version of the OpenAPI document: v2
 * Contact: service@ycloud.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { WhatsappMessageTemplateComponent } from './whatsapp-message-template-component';
import { WhatsappMessageTemplateLanguage } from './whatsapp-message-template-language';

/**
 * Use for sending a WhatsApp `template` message.
 * @export
 * @interface WhatsappMessageTemplate
 */
export interface WhatsappMessageTemplate {
    /**
     * Name of the template.
     * @type {string}
     * @memberof WhatsappMessageTemplate
     */
    'name': string;
    /**
     * 
     * @type {WhatsappMessageTemplateLanguage}
     * @memberof WhatsappMessageTemplate
     */
    'language': WhatsappMessageTemplateLanguage;
    /**
     * **Required when the specified template contains variables or media.** Array of component objects containing the parameters of the message.
     * @type {Array<WhatsappMessageTemplateComponent>}
     * @memberof WhatsappMessageTemplate
     */
    'components'?: Array<WhatsappMessageTemplateComponent>;
}

