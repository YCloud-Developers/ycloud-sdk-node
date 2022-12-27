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
 * Represents a given page of items.
 * @export
 * @interface Page
 */
export interface Page {
    /**
     * The position of the item this page starts from, zero-based. e.g., the 11th item is at offset 10.
     * @type {number}
     * @memberof Page
     */
    'offset': number;
    /**
     * A limit on the number of items to be returned, between 1 and 100, defaults to 10.
     * @type {number}
     * @memberof Page
     */
    'limit': number;
    /**
     * The actual number of items in the page.
     * @type {number}
     * @memberof Page
     */
    'length': number;
    /**
     * The total number of items. This field is returned only when the request parameter `includeTotal` is set to `true`.
     * @type {number}
     * @memberof Page
     */
    'total'?: number;
    /**
     * 
     * @type {Array<object>}
     * @memberof Page
     */
    'items'?: Array<object>;
}
