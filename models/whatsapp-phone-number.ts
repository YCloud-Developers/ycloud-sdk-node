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


import { WhatsappPhoneNumberCodeVerificationStatus } from './whatsapp-phone-number-code-verification-status';
import { WhatsappPhoneNumberNameStatus } from './whatsapp-phone-number-name-status';
import { WhatsappPhoneNumberQualityRating } from './whatsapp-phone-number-quality-rating';
import { WhatsappPhoneNumberQualityUpdateEventEnum } from './whatsapp-phone-number-quality-update-event-enum';
import { WhatsappPhoneNumberStatus } from './whatsapp-phone-number-status';
import { WhatsappReviewDecision } from './whatsapp-review-decision';

/**
 * See [WhatsApp Business Phone Number](https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers)
 * @export
 * @interface WhatsappPhoneNumber
 */
export interface WhatsappPhoneNumber {
    /**
     * Phone number ID.
     * @type {string}
     * @memberof WhatsappPhoneNumber
     */
    'id'?: string;
    /**
     * Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @type {string}
     * @memberof WhatsappPhoneNumber
     */
    'phoneNumber'?: string;
    /**
     * Display phone number.
     * @type {string}
     * @memberof WhatsappPhoneNumber
     */
    'displayPhoneNumber'?: string;
    /**
     * WhatsApp Business Account ID.
     * @type {string}
     * @memberof WhatsappPhoneNumber
     */
    'wabaId'?: string;
    /**
     * 
     * @type {WhatsappPhoneNumberQualityRating}
     * @memberof WhatsappPhoneNumber
     */
    'qualityRating'?: WhatsappPhoneNumberQualityRating;
    /**
     * Messaging limits determine the maximum number of business-initiated conversations each phone number can start in a rolling 24-hour period. See also [Messaging Limits](https://developers.facebook.com/docs/whatsapp/messaging-limits). - `TIER_NOT_SET`: Unknown limit. - `TIER_50`: 50 business-initiated conversations in a rolling 24-hour period. - `TIER_250`: 250 business-initiated conversations in a rolling 24-hour period. - `TIER_1K`: 1K business-initiated conversations with unique customers in a rolling 24-hour period. - `TIER_10K`: 10K business-initiated conversations with unique customers in a rolling 24-hour period. - `TIER_100K`: 100K business-initiated conversations with unique customers in a rolling 24-hour period. - `TIER_UNLIMITED`: An unlimited number of business-initiated conversations in a rolling 24-hour period.
     * @type {string}
     * @memberof WhatsappPhoneNumber
     */
    'messagingLimit'?: string;
    /**
     * Verified name.
     * @type {string}
     * @memberof WhatsappPhoneNumber
     */
    'verifiedName'?: string;
    /**
     * 
     * @type {WhatsappPhoneNumberCodeVerificationStatus}
     * @memberof WhatsappPhoneNumber
     */
    'codeVerificationStatus'?: WhatsappPhoneNumberCodeVerificationStatus;
    /**
     * Whether this phone number is an official business account or not. An official business account has a green checkmark badge in its profile and chat thread headers. See [Official Business Account](https://developers.facebook.com/docs/whatsapp/overview/business-accounts#official-business-account) for more information.
     * @type {boolean}
     * @memberof WhatsappPhoneNumber
     */
    'isOfficialBusinessAccount'?: boolean;
    /**
     * 
     * @type {WhatsappPhoneNumberStatus}
     * @memberof WhatsappPhoneNumber
     */
    'status'?: WhatsappPhoneNumberStatus;
    /**
     * 
     * @type {WhatsappPhoneNumberNameStatus}
     * @memberof WhatsappPhoneNumber
     */
    'nameStatus'?: WhatsappPhoneNumberNameStatus;
    /**
     * 
     * @type {WhatsappPhoneNumberNameStatus}
     * @memberof WhatsappPhoneNumber
     */
    'newNameStatus'?: WhatsappPhoneNumberNameStatus;
    /**
     * 
     * @type {WhatsappReviewDecision}
     * @memberof WhatsappPhoneNumber
     */
    'decision'?: WhatsappReviewDecision;
    /**
     * Last requested verified name.
     * @type {string}
     * @memberof WhatsappPhoneNumber
     */
    'requestedVerifiedName'?: string;
    /**
     * Rejection reason.
     * @type {string}
     * @memberof WhatsappPhoneNumber
     */
    'rejectionReason'?: string;
    /**
     * 
     * @type {WhatsappPhoneNumberQualityUpdateEventEnum}
     * @memberof WhatsappPhoneNumber
     */
    'qualityUpdateEvent'?: WhatsappPhoneNumberQualityUpdateEventEnum;
}

