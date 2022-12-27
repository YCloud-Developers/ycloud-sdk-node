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
 * Contact organization information formatted as an org object.
 * @export
 * @interface WhatsappMessageContactOrg
 */
export interface WhatsappMessageContactOrg {
    /**
     * Name of the contact\'s company.
     * @type {string}
     * @memberof WhatsappMessageContactOrg
     */
    'company'?: string;
    /**
     * Name of the contact\'s department.
     * @type {string}
     * @memberof WhatsappMessageContactOrg
     */
    'department'?: string;
    /**
     * Contact\'s business title.
     * @type {string}
     * @memberof WhatsappMessageContactOrg
     */
    'title'?: string;
}
