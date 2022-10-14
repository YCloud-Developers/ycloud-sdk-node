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
 * Sent when a customer clicks a button. Returned when `type` is `button_reply`.
 * @export
 * @interface WhatsappInboundMessageInteractiveButtonReply
 */
export interface WhatsappInboundMessageInteractiveButtonReply {
    /**
     * Unique ID of a button.
     * @type {string}
     * @memberof WhatsappInboundMessageInteractiveButtonReply
     */
    'id'?: string;
    /**
     * Title of a button.
     * @type {string}
     * @memberof WhatsappInboundMessageInteractiveButtonReply
     */
    'title'?: string;
}

