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
 * WhatsApp outbound message type. See also [WhatsApp messages](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages).
 * @export
 * @enum {string}
 */

export const WhatsappMessageType = {
    Template: 'template',
    Text: 'text',
    Image: 'image',
    Audio: 'audio',
    Video: 'video',
    Document: 'document',
    Sticker: 'sticker',
    Location: 'location',
    Interactive: 'interactive',
    Contacts: 'contacts'
} as const;

export type WhatsappMessageType = typeof WhatsappMessageType[keyof typeof WhatsappMessageType];



