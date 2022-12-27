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


import { WhatsappMessageTemplateComponentsInnerParametersInner } from './whatsapp-message-template-components-inner-parameters-inner';

/**
 * Component object containing the parameters of the message.
 * @export
 * @interface WhatsappMessageTemplateComponentsInner
 */
export interface WhatsappMessageTemplateComponentsInner {
    /**
     * Describes the component type. One of `header`, `body`, `button`. For text-based templates, we only support the type=body.
     * @type {string}
     * @memberof WhatsappMessageTemplateComponentsInner
     */
    'type': WhatsappMessageTemplateComponentsInnerTypeEnum;
    /**
     * Type of button to create. `quick_reply`: Refers to a previously created quick reply button that allows for the customer to return a predefined message. `url`: Refers to a previously created button that allows the customer to visit the URL generated by appending the text parameter to the predefined prefix URL in the template.
     * @type {string}
     * @memberof WhatsappMessageTemplateComponentsInner
     */
    'sub_type'?: WhatsappMessageTemplateComponentsInnerSubTypeEnum;
    /**
     * Required when `type` = `button`. Not used for the other types. Position index of the button. You can have up to 3 buttons using index values of 0 to 2.
     * @type {number}
     * @memberof WhatsappMessageTemplateComponentsInner
     */
    'index'?: number;
    /**
     * Required when `type` = `button`. Array of parameter objects with the content of the message. For components of `type` = `button`, see the [button parameter object](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages#button-parameter-object).
     * @type {Array<WhatsappMessageTemplateComponentsInnerParametersInner>}
     * @memberof WhatsappMessageTemplateComponentsInner
     */
    'parameters'?: Array<WhatsappMessageTemplateComponentsInnerParametersInner>;
}

export const WhatsappMessageTemplateComponentsInnerTypeEnum = {
    Header: 'header',
    Body: 'body',
    Button: 'button'
} as const;

export type WhatsappMessageTemplateComponentsInnerTypeEnum = typeof WhatsappMessageTemplateComponentsInnerTypeEnum[keyof typeof WhatsappMessageTemplateComponentsInnerTypeEnum];
export const WhatsappMessageTemplateComponentsInnerSubTypeEnum = {
    QuickReply: 'quick_reply',
    Url: 'url'
} as const;

export type WhatsappMessageTemplateComponentsInnerSubTypeEnum = typeof WhatsappMessageTemplateComponentsInnerSubTypeEnum[keyof typeof WhatsappMessageTemplateComponentsInnerSubTypeEnum];

