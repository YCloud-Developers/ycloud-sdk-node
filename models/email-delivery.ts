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
 * Represents an email delivery report.
 * @export
 * @interface EmailDelivery
 */
export interface EmailDelivery {
    /**
     * Unique ID for the related email you\'ve previously sent.
     * @type {string}
     * @memberof EmailDelivery
     */
    'emailId': string;
    /**
     * A recipient\'s email address.
     * @type {string}
     * @memberof EmailDelivery
     */
    'recipientAddress': string;
    /**
     * Delivery status of the email to the specific recipient address. - `sending`: The messaging request is accepted by our system. - `failed`: The message failed to be sent from our system. - `sent`: The message has been sent from our system. - `delivered`: Our system has received a delivery receipt indicating that message is delivered. - `undelivered`: Our system has received a delivery receipt indicating that message is not delivered.
     * @type {string}
     * @memberof EmailDelivery
     */
    'status'?: EmailDeliveryStatusEnum;
    /**
     * Error code when the email is undeliverable.
     * @type {string}
     * @memberof EmailDelivery
     */
    'errorCode'?: string;
    /**
     * Error message when the email is undeliverable.
     * @type {string}
     * @memberof EmailDelivery
     */
    'errorMessage'?: string;
    /**
     * The `externalId` you specified when you sent the email.
     * @type {string}
     * @memberof EmailDelivery
     */
    'externalId'?: string;
    /**
     * This can be either empty or one of `email`, or `verify`. Defaults to `email`. - `email`: Indicates that the message is sent via the **Email** product. - `verify`: Indicates that the message is sent via the **Verify** product.
     * @type {string}
     * @memberof EmailDelivery
     */
    'bizType'?: string;
    /**
     * The verification ID. Included only when `bizType` is `verify`.
     * @type {string}
     * @memberof EmailDelivery
     */
    'verificationId'?: string;
}

export const EmailDeliveryStatusEnum = {
    Sending: 'sending',
    Failed: 'failed',
    Sent: 'sent',
    Delivered: 'delivered',
    Undelivered: 'undelivered'
} as const;

export type EmailDeliveryStatusEnum = typeof EmailDeliveryStatusEnum[keyof typeof EmailDeliveryStatusEnum];


