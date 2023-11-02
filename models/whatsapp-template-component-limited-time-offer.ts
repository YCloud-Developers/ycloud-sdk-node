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
 * Use for `LIMITED_TIME_OFFER` components.
 * @export
 * @interface WhatsappTemplateComponentLimitedTimeOffer
 */
export interface WhatsappTemplateComponentLimitedTimeOffer {
    /**
     * **Required.** Offer details text. Maximum 16 characters.
     * @type {string}
     * @memberof WhatsappTemplateComponentLimitedTimeOffer
     */
    'text'?: string;
    /**
     * **Optional.** Set to `true` to have the [offer expiration details](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates/limited-time-offer-templates#offer-expiration-details) appear in the delivered message. If set to `true`, the copy code button component must be included in the `buttons` array, and must appear first in the array. If set to `false`, offer expiration details will not appear in the delivered message and the copy code button component is optional. If including the copy code button, it must appear first in the `buttons` array.
     * @type {boolean}
     * @memberof WhatsappTemplateComponentLimitedTimeOffer
     */
    'has_expiration'?: boolean;
}
