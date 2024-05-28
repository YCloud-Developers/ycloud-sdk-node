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
 * Starting June 1, 2024, we are updating our authentication rate card and introducing a new authentication-international rate. This rate will apply in the the following countries: - June 1, 2024 – Indonesia (country calling code +62, country code `ID`) - July 1, 2024 – India (country calling code +91, country code `IN`)  See also [Authentication-International Rates](https://developers.facebook.com/docs/whatsapp/pricing/authentication-international-rates).
 * @export
 * @interface WhatsappAuthIntlRateEligibilityCountry
 */
export interface WhatsappAuthIntlRateEligibilityCountry {
    /**
     * [ISO 3166-1 alpha-2 country code](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2).
     * @type {string}
     * @memberof WhatsappAuthIntlRateEligibilityCountry
     */
    'countryCode'?: string;
    /**
     * Date when newly-opened authentication conversations are subject to authentication-international rates, formatted in [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339). e.g., `2024-07-01T00:00:00.000Z`.
     * @type {string}
     * @memberof WhatsappAuthIntlRateEligibilityCountry
     */
    'startTime'?: string;
}

