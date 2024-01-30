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


import { WhatsappMessageInteractiveActionButton } from './whatsapp-message-interactive-action-button';
import { WhatsappMessageInteractiveActionParameters } from './whatsapp-message-interactive-action-parameters';
import { WhatsappMessageInteractiveActionSection } from './whatsapp-message-interactive-action-section';

/**
 * **Required.** Action you want the user to perform after reading the `interactive` message. See also [WhatsApp Interactive Action Object](https://developers.facebook.com/docs/whatsapp/cloud-api/reference/messages#action-object).
 * @export
 * @interface WhatsappMessageInteractiveAction
 */
export interface WhatsappMessageInteractiveAction {
    /**
     * Required for Reply Buttons. You can have up to 3 buttons.
     * @type {Array<WhatsappMessageInteractiveActionButton>}
     * @memberof WhatsappMessageInteractiveAction
     */
    'buttons'?: Array<WhatsappMessageInteractiveActionButton>;
    /**
     * Required for List Messages. Button content. It cannot be an empty string and must be unique within the message. Emojis are supported, markdown is not. Maximum length: 20 characters.
     * @type {string}
     * @memberof WhatsappMessageInteractiveAction
     */
    'button'?: string;
    /**
     * Required for Single Product Messages and Multi-Product Messages. Unique identifier of the Facebook catalog linked to your WhatsApp Business Account. This ID can be retrieved via the [Meta Commerce Manager](https://business.facebook.com/commerce/).
     * @type {string}
     * @memberof WhatsappMessageInteractiveAction
     */
    'catalog_id'?: string;
    /**
     * Required for Single Product Messages and Multi-Product Messages. Unique identifier of the product in a catalog.
     * @type {string}
     * @memberof WhatsappMessageInteractiveAction
     */
    'product_retailer_id'?: string;
    /**
     * Required for List Messages and Multi-Product Messages. Array of section objects. Minimum of 1, maximum of 10.
     * @type {Array<WhatsappMessageInteractiveActionSection>}
     * @memberof WhatsappMessageInteractiveAction
     */
    'sections'?: Array<WhatsappMessageInteractiveActionSection>;
    /**
     * Action name. Required for Call-To-Action (CTA) URL Button Messages. - `cta_url`: Use for Call-To-Action (CTA) URL Buttons. - `send_location`: Use for Location Request Messages.
     * @type {string}
     * @memberof WhatsappMessageInteractiveAction
     */
    'name'?: WhatsappMessageInteractiveActionNameEnum;
    /**
     * 
     * @type {WhatsappMessageInteractiveActionParameters}
     * @memberof WhatsappMessageInteractiveAction
     */
    'parameters'?: WhatsappMessageInteractiveActionParameters;
}

export const WhatsappMessageInteractiveActionNameEnum = {
    CtaUrl: 'cta_url',
    SendLocation: 'send_location'
} as const;

export type WhatsappMessageInteractiveActionNameEnum = typeof WhatsappMessageInteractiveActionNameEnum[keyof typeof WhatsappMessageInteractiveActionNameEnum];


