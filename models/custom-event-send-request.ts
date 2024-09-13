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
 * Contains the properties of the custom event data to be sent.
 * @export
 * @interface CustomEventSendRequest
 */
export interface CustomEventSendRequest {
    /**
     * Name of the event. One of the custom event names you previously defined.
     * @type {string}
     * @memberof CustomEventSendRequest
     */
    'eventName': string;
    /**
     * The time at which the event occurred, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`, if not provided, the current time will be used.
     * @type {string}
     * @memberof CustomEventSendRequest
     */
    'occurTime'?: string;
    /**
     * ID of the object that the event is associated with. For events defined with `objectType` as `CONTACT`, the `objectId` should be a `contact` ID. Alternatively, you can use the `contactPhoneNumber` field to specify the contact.
     * @type {string}
     * @memberof CustomEventSendRequest
     */
    'objectId'?: string;
    /**
     * The phone number of the contact for events defined with `objectType` as `CONTACT`.
     * @type {string}
     * @memberof CustomEventSendRequest
     */
    'contactPhoneNumber'?: string;
    /**
     * The properties of the custom event.
     * @type {{ [key: string]: object; }}
     * @memberof CustomEventSendRequest
     */
    'properties'?: { [key: string]: object; };
}
