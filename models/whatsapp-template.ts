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


import { WhatsappTemplateCategory } from './whatsapp-template-category';
import { WhatsappTemplateComponent } from './whatsapp-template-component';
import { WhatsappTemplateStatus } from './whatsapp-template-status';
import { WhatsappTemplateStatusUpdateEventEnum } from './whatsapp-template-status-update-event-enum';

/**
 * See [WhatsApp Templates](https://developers.facebook.com/docs/whatsapp/business-management-api/message-templates).
 * @export
 * @interface WhatsappTemplate
 */
export interface WhatsappTemplate {
    /**
     * WhatsApp Business Account ID.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'wabaId': string;
    /**
     * Name of the template.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'name': string;
    /**
     * Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages-) for all codes.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'language': string;
    /**
     * 
     * @type {WhatsappTemplateCategory}
     * @memberof WhatsappTemplate
     */
    'category': WhatsappTemplateCategory;
    /**
     * 
     * @type {Array<WhatsappTemplateComponent>}
     * @memberof WhatsappTemplate
     */
    'components': Array<WhatsappTemplateComponent>;
    /**
     * 
     * @type {WhatsappTemplateStatus}
     * @memberof WhatsappTemplate
     */
    'status'?: WhatsappTemplateStatus;
    /**
     * The reason why the template is rejected.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'reason'?: string;
    /**
     * The time at which this object is created, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'createTime'?: string;
    /**
     * The time at which this object is updated, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2022-06-01T12:00:00.000Z`.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'updateTime'?: string;
    /**
     * 
     * @type {WhatsappTemplateStatusUpdateEventEnum}
     * @memberof WhatsappTemplate
     */
    'statusUpdateEvent'?: WhatsappTemplateStatusUpdateEventEnum;
    /**
     * The date at which the template will be disabled. When a WhatsApp template `FLAGGED` event is received, this field is set.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'disableDate'?: string;
}
