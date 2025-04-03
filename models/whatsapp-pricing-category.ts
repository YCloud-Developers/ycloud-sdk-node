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
 * WhatsApp pricing category. - `referral_conversion`: Indicates a [free entry point conversation](https://developers.facebook.com/docs/whatsapp/pricing#free-entry-point-conversations). - `authentication`: Indicates the conversation was billed at authentication rate. - `authentication_international`: Indicates the conversation was conversation was billed at the [authentication-international rate](https://developers.facebook.com/docs/whatsapp/pricing/authentication-international-rates). - `marketing`: Indicates the conversation was billed at authentication rate. - `marketing_lite`: Indicates the conversation was billed at marketing-lite rate. - `utility`: Indicates the conversation was billed at utility rate. - `service`: Indicates the conversation was billed at service rate.  See also [Conversation-Based Pricing](https://developers.facebook.com/docs/whatsapp/pricing).
 * @export
 * @enum {string}
 */

export const WhatsappPricingCategory = {
    ReferralConversion: 'referral_conversion',
    Authentication: 'authentication',
    AuthenticationInternational: 'authentication_international',
    Marketing: 'marketing',
    MarketingLite: 'marketing_lite',
    Utility: 'utility',
    Service: 'service'
} as const;

export type WhatsappPricingCategory = typeof WhatsappPricingCategory[keyof typeof WhatsappPricingCategory];



