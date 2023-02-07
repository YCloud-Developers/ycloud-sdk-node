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


import { WhatsappApiError } from './whatsapp-api-error';
import { WhatsappConversation } from './whatsapp-conversation';
import { WhatsappMessageContact } from './whatsapp-message-contact';
import { WhatsappMessageInteractive } from './whatsapp-message-interactive';
import { WhatsappMessageLocation } from './whatsapp-message-location';
import { WhatsappMessageMedia } from './whatsapp-message-media';
import { WhatsappMessageStatus } from './whatsapp-message-status';
import { WhatsappMessageTemplate } from './whatsapp-message-template';
import { WhatsappMessageText } from './whatsapp-message-text';
import { WhatsappMessageType } from './whatsapp-message-type';

/**
 * WhatsApp outbound message object.
 * @export
 * @interface WhatsappMessage
 */
export interface WhatsappMessage {
    /**
     * Unique ID for the object.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'id': string;
    /**
     * The native WhatsApp message ID.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'wamid'?: string;
    /**
     * WhatsApp Business Account ID.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'wabaId': string;
    /**
     * The sender\'s phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'from': string;
    /**
     * The recipient\'s phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'to': string;
    /**
     * 
     * @type {WhatsappConversation}
     * @memberof WhatsappMessage
     */
    'conversation'?: WhatsappConversation;
    /**
     * 
     * @type {WhatsappMessageType}
     * @memberof WhatsappMessage
     */
    'type': WhatsappMessageType;
    /**
     * 
     * @type {WhatsappMessageTemplate}
     * @memberof WhatsappMessage
     */
    'template'?: WhatsappMessageTemplate;
    /**
     * 
     * @type {WhatsappMessageText}
     * @memberof WhatsappMessage
     */
    'text'?: WhatsappMessageText;
    /**
     * 
     * @type {WhatsappMessageMedia}
     * @memberof WhatsappMessage
     */
    'image'?: WhatsappMessageMedia;
    /**
     * 
     * @type {WhatsappMessageMedia}
     * @memberof WhatsappMessage
     */
    'video'?: WhatsappMessageMedia;
    /**
     * 
     * @type {WhatsappMessageMedia}
     * @memberof WhatsappMessage
     */
    'audio'?: WhatsappMessageMedia;
    /**
     * 
     * @type {WhatsappMessageMedia}
     * @memberof WhatsappMessage
     */
    'document'?: WhatsappMessageMedia;
    /**
     * 
     * @type {WhatsappMessageLocation}
     * @memberof WhatsappMessage
     */
    'location'?: WhatsappMessageLocation;
    /**
     * 
     * @type {WhatsappMessageInteractive}
     * @memberof WhatsappMessage
     */
    'interactive'?: WhatsappMessageInteractive;
    /**
     * 
     * @type {Array<WhatsappMessageContact>}
     * @memberof WhatsappMessage
     */
    'contacts'?: Array<WhatsappMessageContact>;
    /**
     * A unique string to reference the object. This can be an order number or similar, and can be used to reconcile the object with your internal systems.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'externalId'?: string;
    /**
     * 
     * @type {WhatsappMessageStatus}
     * @memberof WhatsappMessage
     */
    'status'?: WhatsappMessageStatus;
    /**
     * Error code when the message status is `failed`.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'errorCode'?: string;
    /**
     * Error message when the message status is `failed`.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'errorMessage'?: string;
    /**
     * The time at which this message is created, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'createTime'?: string;
    /**
     * The time at which this message is updated, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`.
     * @type {string}
     * @memberof WhatsappMessage
     */
    'updateTime'?: string;
    /**
     * Total price of this message.
     * @type {number}
     * @memberof WhatsappMessage
     */
    'totalPrice'?: number;
    /**
     * Price currency. [ISO 4217 currency code](https://en.wikipedia.org/wiki/ISO_4217).
     * @type {string}
     * @memberof WhatsappMessage
     */
    'currency'?: string;
    /**
     * 
     * @type {WhatsappApiError}
     * @memberof WhatsappMessage
     */
    'whatsappApiError'?: WhatsappApiError;
}

