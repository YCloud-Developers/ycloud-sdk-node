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


import { WhatsappTemplateCategory } from './whatsapp-template-category';
import { WhatsappTemplateComponent } from './whatsapp-template-component';

/**
 * See [WhatsApp Templates](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates).
 * @export
 * @interface WhatsappTemplateCreateRequest
 */
export interface WhatsappTemplateCreateRequest {
    /**
     * WhatsApp Business Account ID.
     * @type {string}
     * @memberof WhatsappTemplateCreateRequest
     */
    'wabaId': string;
    /**
     * Name of the template.
     * @type {string}
     * @memberof WhatsappTemplateCreateRequest
     */
    'name': string;
    /**
     * Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
     * @type {string}
     * @memberof WhatsappTemplateCreateRequest
     */
    'language': string;
    /**
     * 
     * @type {WhatsappTemplateCategory}
     * @memberof WhatsappTemplateCreateRequest
     */
    'category': WhatsappTemplateCategory;
    /**
     * **Use only for template category is `AUTHENTICATION` or `UTILITY`.** If we are unable to deliver a message for an amount of time that exceeds its time-to-live, we will stop retrying and drop the message. By default, messages that use an authentication template have a default TTL of **10 minutes**, and messages that use a utility template have a default TTL of **30 days**. Set its value between `60` and `600` seconds (i.e., 1 to 10 minutes) for authentication templates, or `60` and `3600` seconds (i.e., 1 to 60 minutes) for utility templates. Alternatively, you can set this value to `-1`, which will set a custom TTL of 30 days for either type of template. We encourage you to set a time-to-live for all of your authentication templates, preferably equal to or less than your code expiration time, to ensure your customers only get a message when a code is still usable. Authentication templates created before October 23, 2024, have a default TTL of 30 days.
     * @type {number}
     * @memberof WhatsappTemplateCreateRequest
     */
    'messageSendTtlSeconds'?: number;
    /**
     * 
     * @type {Array<WhatsappTemplateComponent>}
     * @memberof WhatsappTemplateCreateRequest
     */
    'components': Array<WhatsappTemplateComponent>;
}

