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
 * [WhatsApp Media Object](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages#media-object).
 * @export
 * @interface WhatsappMessageMedia
 */
export interface WhatsappMessageMedia {
    /**
     * The protocol and URL of the media to be sent. Use only with HTTP/HTTPS URLs.
     * @type {string}
     * @memberof WhatsappMessageMedia
     */
    'link': string;
    /**
     * Describes the specified `video` or `image` media.
     * @type {string}
     * @memberof WhatsappMessageMedia
     */
    'caption'?: string;
    /**
     * Describes the filename for the specific document. Use only with `document` media.
     * @type {string}
     * @memberof WhatsappMessageMedia
     */
    'filename'?: string;
}

