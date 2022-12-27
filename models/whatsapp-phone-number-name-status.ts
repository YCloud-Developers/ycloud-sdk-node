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
 * The review status of the current display name request. See also [Get Display Name Status](https://developers.facebook.com/docs/whatsapp/business-management-api/manage-phone-numbers#get-display-name-status--beta-).
 * @export
 * @enum {string}
 */

export const WhatsappPhoneNumberNameStatus = {
    /**
    * The name has been approved. You can download your certificate now.
    */
    Approved: 'APPROVED',
    /**
    * The certificate for the phone is available and display name is ready to use without review.
    */
    AvailableWithoutReview: 'AVAILABLE_WITHOUT_REVIEW',
    /**
    * The name has not been approved. You cannot download your certificate.
    */
    Declined: 'DECLINED',
    /**
    * Your certificate has expire and can no longer be downloaded.
    */
    Expired: 'EXPIRED',
    /**
    * Your name request is under review. You cannot download your certificate.
    */
    PendingReview: 'PENDING_REVIEW',
    /**
    * No certificate is available.
    */
    None: 'NONE'
} as const;

export type WhatsappPhoneNumberNameStatus = typeof WhatsappPhoneNumberNameStatus[keyof typeof WhatsappPhoneNumberNameStatus];


