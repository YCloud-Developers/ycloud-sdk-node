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



/**
 * Button type. - `PHONE_NUMBER`: Phone number buttons call the specified business phone number when tapped by the app user. Templates are limited to one phone number button. - `URL`: URL buttons load the specified URL in the device\'s default web browser when tapped by the app user. Templates are limited to two URL buttons. - `QUICK_REPLY`: Quick reply buttons are custom text-only buttons that immediately message you with the specified text string when tapped by the app user. Templates are limited to 10 quick reply buttons. If using quick reply buttons with other buttons, buttons must be organized into two groups: quick reply buttons and non-quick reply buttons. - `COPY_CODE`: Copy code buttons copy a text string (defined when the template is sent in a template message) to the device\'s clipboard when tapped by the app user. Templates are limited to one copy code button. - `OTP`: One-time password (OTP) buttons are a special type of URL button component used with authentication templates.
 * @export
 * @enum {string}
 */

export const WhatsappTemplateComponentButtonType = {
    PhoneNumber: 'PHONE_NUMBER',
    Url: 'URL',
    QuickReply: 'QUICK_REPLY',
    CopyCode: 'COPY_CODE',
    Otp: 'OTP'
} as const;

export type WhatsappTemplateComponentButtonType = typeof WhatsappTemplateComponentButtonType[keyof typeof WhatsappTemplateComponentButtonType];



