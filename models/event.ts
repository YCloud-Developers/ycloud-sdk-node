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


import { EmailDelivery } from './email-delivery';
import { EventType } from './event-type';
import { Sms } from './sms';
import { Voice } from './voice';
import { WhatsappInboundMessage } from './whatsapp-inbound-message';
import { WhatsappMessage } from './whatsapp-message';
import { WhatsappTemplate } from './whatsapp-template';

/**
 * Represents a webhook event payload. Every event contains certain common properties: `id`, `type`, `apiVersion`, `createTime`. Each event may also contain some properties unique to the event. For example, `sms` is returned when `type` is `sms.message.updated`.
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * Unique ID for the object.
     * @type {string}
     * @memberof Event
     */
    'id': string;
    /**
     * 
     * @type {EventType}
     * @memberof Event
     */
    'type': EventType;
    /**
     * The API version used to render this event.
     * @type {string}
     * @memberof Event
     */
    'apiVersion': string;
    /**
     * The time at which this event was created, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`.
     * @type {string}
     * @memberof Event
     */
    'createTime': string;
    /**
     * 
     * @type {EmailDelivery}
     * @memberof Event
     */
    'emailDelivery'?: EmailDelivery;
    /**
     * 
     * @type {Sms}
     * @memberof Event
     */
    'sms'?: Sms;
    /**
     * 
     * @type {Voice}
     * @memberof Event
     */
    'voice'?: Voice;
    /**
     * 
     * @type {WhatsappInboundMessage}
     * @memberof Event
     */
    'whatsappInboundMessage'?: WhatsappInboundMessage;
    /**
     * 
     * @type {WhatsappMessage}
     * @memberof Event
     */
    'whatsappMessage'?: WhatsappMessage;
    /**
     * 
     * @type {WhatsappTemplate}
     * @memberof Event
     */
    'whatsappTemplate'?: WhatsappTemplate;
}

