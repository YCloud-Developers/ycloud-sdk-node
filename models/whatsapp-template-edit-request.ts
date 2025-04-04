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


import { WhatsappTemplateComponent } from './whatsapp-template-component';

/**
 * The request body to edit a WhatsApp template.
 * @export
 * @interface WhatsappTemplateEditRequest
 */
export interface WhatsappTemplateEditRequest {
    /**
     * 
     * @type {Array<WhatsappTemplateComponent>}
     * @memberof WhatsappTemplateEditRequest
     */
    'components': Array<WhatsappTemplateComponent>;
    /**
     * If we are unable to deliver a message for an amount of time that exceeds its time-to-live, we will stop retrying and drop the message. By default, messages that use an authentication template have a default TTL of **10 minutes**, and messages that use a utility or marketing template have a default TTL of **30 days**. Set its value between `30` and `900` seconds (i.e., 30 seconds to 15 minutes) for authentication templates, or `30` and `43200` seconds (i.e., 30 seconds to 12 hours) for utility templates, or `43200` and `2592000` seconds (i.e., 12 hours to 30 days) for marketing templates. Alternatively, you can set this value to `-1`, which will set a custom TTL of 30 days for either type of template. We encourage you to set a time-to-live for all of your authentication templates, preferably equal to or less than your code expiration time, to ensure your customers only get a message when a code is still usable. Authentication templates created before October 23, 2024, have a default TTL of 30 days.
     * @type {number}
     * @memberof WhatsappTemplateEditRequest
     */
    'messageSendTtlSeconds'?: number;
}

