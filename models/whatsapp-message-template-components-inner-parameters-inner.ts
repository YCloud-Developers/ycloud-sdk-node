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


import { WhatsappMessageMedia } from './whatsapp-message-media';

/**
 * See [Parameter Object](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages#parameter-object), [Button Parameter Object](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages#button-parameter-object.
 * @export
 * @interface WhatsappMessageTemplateComponentsInnerParametersInner
 */
export interface WhatsappMessageTemplateComponentsInnerParametersInner {
    /**
     * Describes the parameter type.
     * @type {string}
     * @memberof WhatsappMessageTemplateComponentsInnerParametersInner
     */
    'type'?: WhatsappMessageTemplateComponentsInnerParametersInnerTypeEnum;
    /**
     * Required when `type` = `text`. The message\'s text. For the header component, the character limit is 60 characters. For the body component, the character limit is 1024 characters. For url buttons, it indicates the developer-provided suffix that is appended to the predefined prefix URL in the template.
     * @type {string}
     * @memberof WhatsappMessageTemplateComponentsInnerParametersInner
     */
    'text'?: string;
    /**
     * Required for `quick_reply` buttons. Developer-defined payload that is returned when the button is clicked in addition to the display text on the button.
     * @type {string}
     * @memberof WhatsappMessageTemplateComponentsInnerParametersInner
     */
    'payload'?: string;
    /**
     * 
     * @type {WhatsappMessageMedia}
     * @memberof WhatsappMessageTemplateComponentsInnerParametersInner
     */
    'image'?: WhatsappMessageMedia;
    /**
     * 
     * @type {WhatsappMessageMedia}
     * @memberof WhatsappMessageTemplateComponentsInnerParametersInner
     */
    'video'?: WhatsappMessageMedia;
    /**
     * 
     * @type {WhatsappMessageMedia}
     * @memberof WhatsappMessageTemplateComponentsInnerParametersInner
     */
    'document'?: WhatsappMessageMedia;
}

export const WhatsappMessageTemplateComponentsInnerParametersInnerTypeEnum = {
    Text: 'text',
    Image: 'image',
    Video: 'video',
    Document: 'document',
    Payload: 'payload'
} as const;

export type WhatsappMessageTemplateComponentsInnerParametersInnerTypeEnum = typeof WhatsappMessageTemplateComponentsInnerParametersInnerTypeEnum[keyof typeof WhatsappMessageTemplateComponentsInnerParametersInnerTypeEnum];


