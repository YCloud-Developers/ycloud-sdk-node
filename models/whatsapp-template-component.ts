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
     * 
     * @type {string}
     * @memberof WhatsappTemplateComponent
     */
    'type'?: WhatsappTemplateComponentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof WhatsappTemplateComponent
     */
    'format'?: WhatsappTemplateComponentFormatEnum;
    /**
     * 
     * @type {string}
     * @memberof WhatsappTemplateComponent
     */
    'text'?: string;
    /**
     * 
     * @type {Array<WhatsappTemplateComponentButton>}
     * @memberof WhatsappTemplateComponent
     */
    'buttons'?: Array<WhatsappTemplateComponentButton>;
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

