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


import { WhatsappTemplateComponentButton } from './whatsapp-template-component-button';
import { WhatsappTemplateComponentExample } from './whatsapp-template-component-example';

/**
 * 
 * @export
 * @interface WhatsappTemplateComponent
 */
export interface WhatsappTemplateComponent {
    /**
     * **Required.** Template component type.
     * @type {string}
     * @memberof WhatsappTemplateComponent
     */
    'type'?: WhatsappTemplateComponentTypeEnum;
    /**
     * **Required for type `HEADER`.**
     * @type {string}
     * @memberof WhatsappTemplateComponent
     */
    'format'?: WhatsappTemplateComponentFormatEnum;
    /**
     * **Required for type `BODY`, `FOOTER`, and format `TEXT`.**
     * @type {string}
     * @memberof WhatsappTemplateComponent
     */
    'text'?: string;
    /**
     * **Required for type `BUTTONS`.** Buttons are optional interactive components that perform specific actions when tapped. Templates can have a mixture of up to 10 button components total, although there are limits to individual buttons of the same type as well as combination limits. If a template has more than three buttons, two buttons will appear in the delivered message and the remaining buttons will be replaced with a **See all options** button. Tapping the **See all options** button reveals the remaining buttons.
     * @type {Array<WhatsappTemplateComponentButton>}
     * @memberof WhatsappTemplateComponent
     */
    'buttons'?: Array<WhatsappTemplateComponentButton>;
    /**
     * **Optional. Only applicable in the `BODY` component of an AUTHENTICATION template.** Set to `true` if you want the template to include the string, *For your security, do not share this code.* Set to `false` to exclude the string.
     * @type {boolean}
     * @memberof WhatsappTemplateComponent
     */
    'add_security_recommendation'?: boolean;
    /**
     * **Optional. Only applicable in the `FOOTER` component of an AUTHENTICATION template.** Indicates number of minutes the password or code is valid. If omitted, the code expiration warning will not be displayed in the delivered message. Minimum 1, maximum 90.
     * @type {number}
     * @memberof WhatsappTemplateComponent
     */
    'code_expiration_minutes'?: number;
    /**
     * 
     * @type {WhatsappTemplateComponentExample}
     * @memberof WhatsappTemplateComponent
     */
    'example'?: WhatsappTemplateComponentExample;
}

export const WhatsappTemplateComponentTypeEnum = {
    Body: 'BODY',
    Header: 'HEADER',
    Footer: 'FOOTER',
    Buttons: 'BUTTONS'
} as const;

export type WhatsappTemplateComponentTypeEnum = typeof WhatsappTemplateComponentTypeEnum[keyof typeof WhatsappTemplateComponentTypeEnum];
export const WhatsappTemplateComponentFormatEnum = {
    Text: 'TEXT',
    Image: 'IMAGE',
    Video: 'VIDEO',
    Document: 'DOCUMENT'
} as const;

export type WhatsappTemplateComponentFormatEnum = typeof WhatsappTemplateComponentFormatEnum[keyof typeof WhatsappTemplateComponentFormatEnum];


