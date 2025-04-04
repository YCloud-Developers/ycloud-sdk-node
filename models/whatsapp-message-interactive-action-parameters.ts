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


import { WhatsappMessageInteractiveActionParametersFlowActionPayload } from './whatsapp-message-interactive-action-parameters-flow-action-payload';
import { WhatsappMessageOrderAmount } from './whatsapp-message-order-amount';
import { WhatsappMessageOrderBeneficiary } from './whatsapp-message-order-beneficiary';
import { WhatsappMessageOrderInfo } from './whatsapp-message-order-info';
import { WhatsappMessageOrderPaymentSetting } from './whatsapp-message-order-payment-setting';

/**
 * Action parameters. Required for Call-To-Action (CTA) buttons.
 * @export
 * @interface WhatsappMessageInteractiveActionParameters
 */
export interface WhatsappMessageInteractiveActionParameters {
    /**
     * Text of the CTA URL button. Maximum length: 20 bytes.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'display_text'?: string;
    /**
     * URL of the CTA URL button.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'url'?: string;
    /**
     * Item SKU number. Labeled as **Content ID** in the [Commerce Manager](https://business.facebook.com/commerce). The thumbnail of this item will be used as the message\'s header image.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'thumbnail_product_retailer_id'?: string;
    /**
     * Use for `flow` buttons. Value must be \"3\".
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'flow_message_version'?: string;
    /**
     * Use for `flow` buttons. Flow token that is generated by the business to serve as an identifier. Defaults to `unused`.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'flow_token'?: string;
    /**
     * Conditionally required for `flow` buttons. Unique ID of the Flow provided by WhatsApp. Cannot be used with the `flow_name` parameter.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'flow_id'?: string;
    /**
     * Conditionally required for `flow` buttons. The name of the Flow that you created. Cannot be used with the `flow_id` parameter. Changing the Flow name will require updating this parameter to match the new name.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'flow_name'?: string;
    /**
     * Required for `flow` buttons. Text on the CTA button. For example: \"Open flow!\". Maximum length: 20 characters.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'flow_cta'?: string;
    /**
     * Use for `flow` buttons. Either `navigate` or `data_exchange`. Defaults to `navigate`.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'flow_action'?: string;
    /**
     * 
     * @type {WhatsappMessageInteractiveActionParametersFlowActionPayload}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'flow_action_payload'?: WhatsappMessageInteractiveActionParametersFlowActionPayload;
    /**
     * Required for `review_and_pay` buttons. Unique identifier for the order provided by the business. It is case sensitive and cannot be an empty string and can only contain English letters, numbers, underscores, dashes, or dots, and should not exceed 35 characters.  The `reference_id` must be unique for each order_details message for a given business. If there is a need to send multiple order_details messages for the same order, it is recommended to include a sequence number in the reference_id (for example, \"BM345A-12\") to ensure reference_id uniqueness.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'reference_id'?: string;
    /**
     * Required for `review_and_pay` buttons. The type of goods being paid for in this order. Current supported options are `digital-goods` and `physical-goods`.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'type'?: string;
    /**
     * Required for `review_and_pay` buttons. An array of beneficiaries for this order. A beneficiary is an intended recipient for shipping the physical goods in the order. Beneficiary information isn\'t shown to users but is needed for legal and compliance reasons.
     * @type {Array<WhatsappMessageOrderBeneficiary>}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'beneficiaries'?: Array<WhatsappMessageOrderBeneficiary>;
    /**
     * Required for `review_and_pay` buttons. The currency for this order. Currently the only supported value is `INR`.
     * @type {string}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'currency'?: string;
    /**
     * 
     * @type {WhatsappMessageOrderAmount}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'total_amount'?: WhatsappMessageOrderAmount;
    /**
     * 
     * @type {WhatsappMessageOrderInfo}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'order'?: WhatsappMessageOrderInfo;
    /**
     * Required for `review_and_pay` buttons. Payment settings for the order.
     * @type {Array<WhatsappMessageOrderPaymentSetting>}
     * @memberof WhatsappMessageInteractiveActionParameters
     */
    'payment_settings'?: Array<WhatsappMessageOrderPaymentSetting>;
}

