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
 * 
 * @export
 * @interface WhatsappInboundMessageOrderProductItem
 */
export interface WhatsappInboundMessageOrderProductItem {
    /**
     * The product SKU identifier.
     * @type {string}
     * @memberof WhatsappInboundMessageOrderProductItem
     */
    'product_retailer_id'?: string;
    /**
     * Number of item.
     * @type {number}
     * @memberof WhatsappInboundMessageOrderProductItem
     */
    'quantity'?: number;
    /**
     * Unitary price of item.
     * @type {number}
     * @memberof WhatsappInboundMessageOrderProductItem
     */
    'item_price'?: number;
    /**
     * Price currency. [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217).
     * @type {string}
     * @memberof WhatsappInboundMessageOrderProductItem
     */
    'currency'?: string;
}

