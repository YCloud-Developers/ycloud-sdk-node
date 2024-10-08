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
 * Contains the properties of the custom event property definition to be created.
 * @export
 * @interface CustomEventDefinitionPropertyCreateRequest
 */
export interface CustomEventDefinitionPropertyCreateRequest {
    /**
     * The unique name of the custom property.
     * @type {string}
     * @memberof CustomEventDefinitionPropertyCreateRequest
     */
    'name': string;
    /**
     * The label of the property.
     * @type {string}
     * @memberof CustomEventDefinitionPropertyCreateRequest
     */
    'label': string;
    /**
     * The description of the property.
     * @type {string}
     * @memberof CustomEventDefinitionPropertyCreateRequest
     */
    'description'?: string;
    /**
     * Type of the property. - `STRING`: Indicates a property that receives plain text strings. - `NUMBER`: Indicates a property that receives numeric values with up to one decimal. - `TIMESTAMP`: Indicates a property that receives epoch millisecond. - `URL`: Indicates a property that receives URLs, formatted as strings starting with `http://` or `https://`.
     * @type {string}
     * @memberof CustomEventDefinitionPropertyCreateRequest
     */
    'type': CustomEventDefinitionPropertyCreateRequestTypeEnum;
}

export const CustomEventDefinitionPropertyCreateRequestTypeEnum = {
    String: 'STRING',
    Number: 'NUMBER',
    Timestamp: 'TIMESTAMP',
    Url: 'URL'
} as const;

export type CustomEventDefinitionPropertyCreateRequestTypeEnum = typeof CustomEventDefinitionPropertyCreateRequestTypeEnum[keyof typeof CustomEventDefinitionPropertyCreateRequestTypeEnum];


