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


import { WhatsappMessageOrderAmount } from './whatsapp-message-order-amount';
import { WhatsappMessageOrderInfo } from './whatsapp-message-order-info';
import { WhatsappMessageOrderPaymentSetting } from './whatsapp-message-order-payment-setting';

/**
 * Contains the order details when sending a template message with a `order_details` button.
 * @export
 * @interface WhatsappMessageOrderDetails
 */
export interface WhatsappMessageOrderDetails {
    /**
     * The currency for this order. Currently the only supported value is `INR`.
     * @type {string}
     * @memberof WhatsappMessageOrderDetails
     */
    'currency': string;
    /**
     * 
     * @type {WhatsappMessageOrderInfo}
     * @memberof WhatsappMessageOrderDetails
     */
    'order': WhatsappMessageOrderInfo;
    /**
     * Unique identifier for the order provided by the business. It is case sensitive and cannot be an empty string and can only contain English letters, numbers, underscores, dashes, or dots, and should not exceed 35 characters.  The `reference_id` must be unique for each order_details message for a given business. If there is a need to send multiple order_details messages for the same order, it is recommended to include a sequence number in the reference_id (for example, \"BM345A-12\") to ensure reference_id uniqueness.
     * @type {string}
     * @memberof WhatsappMessageOrderDetails
     */
    'reference_id': string;
    /**
     * 
     * @type {WhatsappMessageOrderAmount}
     * @memberof WhatsappMessageOrderDetails
     */
    'total_amount': WhatsappMessageOrderAmount;
    /**
     * The type of goods being paid for in this order. Current supported options are `digital-goods` and `physical-goods`.
     * @type {string}
     * @memberof WhatsappMessageOrderDetails
     */
    'type': string;
    /**
     * Payment settings for the order.
     * @type {Array<WhatsappMessageOrderPaymentSetting>}
     * @memberof WhatsappMessageOrderDetails
     */
    'payment_settings': Array<WhatsappMessageOrderPaymentSetting>;
}

