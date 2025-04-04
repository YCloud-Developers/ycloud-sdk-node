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
import { WhatsappTemplateCategory } from './whatsapp-template-category';
import { WhatsappTemplateComponent } from './whatsapp-template-component';
import { WhatsappTemplateQualityRating } from './whatsapp-template-quality-rating';
import { WhatsappTemplateStatus } from './whatsapp-template-status';
import { WhatsappTemplateStatusUpdateEventEnum } from './whatsapp-template-status-update-event-enum';
import { WhatsappTemplateSubCategory } from './whatsapp-template-sub-category';

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
     * Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'language': string;
    /**
     * 
     * @type {WhatsappTemplateCategory}
     * @memberof WhatsappTemplate
     */
    'category'?: WhatsappTemplateCategory;
    /**
     * 
     * @type {WhatsappTemplateSubCategory}
     * @memberof WhatsappTemplate
     */
    'subCategory'?: WhatsappTemplateSubCategory;
    /**
     * This field indicates the template\'s previous category (or `null`, for newly created templates after April 1, 2023). Compare this value to the template\'s `category` field value, which indicates the template\'s current category.
     * @type {string}
     * @memberof WhatsappTemplate
     */
    'previousCategory'?: string;
    /**
     * If we are unable to deliver a message for an amount of time that exceeds its time-to-live, we will stop retrying and drop the message. By default, messages that use an authentication template have a default TTL of **10 minutes**, and messages that use a utility or marketing template have a default TTL of **30 days**. Set its value between `30` and `900` seconds (i.e., 30 seconds to 15 minutes) for authentication templates, or `30` and `43200` seconds (i.e., 30 seconds to 12 hours) for utility templates, or `43200` and `2592000` seconds (i.e., 12 hours to 30 days) for marketing templates. Alternatively, you can set this value to `-1`, which will set a custom TTL of 30 days for either type of template. We encourage you to set a time-to-live for all of your authentication templates, preferably equal to or less than your code expiration time, to ensure your customers only get a message when a code is still usable. Authentication templates created before October 23, 2024, have a default TTL of 30 days.
     * @type {number}
     * @memberof WhatsappTemplate
     */
    'messageSendTtlSeconds'?: number;
    /**
     * Template components. A template consists of `HEADER`, `BODY`, `FOOTER`, and `BUTTONS` components. `BODY` component is required, the other types are optional.
     * @type {Array<WhatsappTemplateComponent>}
     * @memberof WhatsappTemplate
     */
    'components'?: Array<WhatsappTemplateComponent>;
    /**
     * 
     * @type {WhatsappTemplateStatus}
     * @memberof WhatsappTemplate
     */
    'status'?: WhatsappTemplateStatus;
    /**
     * 
     * @type {WhatsappTemplateQualityRating}
     * @memberof WhatsappTemplate
     */
    'qualityRating'?: WhatsappTemplateQualityRating;
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
    /**
     * 
     * @type {WhatsappApiError}
     * @memberof WhatsappTemplate
     */
    'whatsappApiError'?: WhatsappApiError;
}

