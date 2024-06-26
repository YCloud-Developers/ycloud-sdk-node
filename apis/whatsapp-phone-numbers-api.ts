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


import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from '../common';
// @ts-ignore
import { BASE_PATH, USER_AGENT, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { ErrorResponse } from '../models';
// @ts-ignore
import { WhatsappCommerceSettings } from '../models';
// @ts-ignore
import { WhatsappCommerceSettingsUpdateRequest } from '../models';
// @ts-ignore
import { WhatsappPhoneNumber } from '../models';
// @ts-ignore
import { WhatsappPhoneNumberPage } from '../models';
// @ts-ignore
import { WhatsappPhoneNumberProfile } from '../models';
// @ts-ignore
import { WhatsappPhoneNumberProfileUpdateRequest } from '../models';
/**
 * WhatsappPhoneNumbersApi - axios parameter creator
 * @export
 */
const WhatsappPhoneNumbersApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns a paginated list of WhatsApp business phone numbers you\'ve registered.
         * @summary List phone numbers
         * @param {WhatsappPhoneNumbersApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (requestParameters: WhatsappPhoneNumbersApiListRequest = {}, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            let page = requestParameters['page'];
            let limit = requestParameters['limit'];
            let includeTotal = requestParameters['includeTotal'];
            let filterWabaId = requestParameters['filterWabaId'];
            const localVarPath = `/whatsapp/phoneNumbers`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }

            if (includeTotal !== undefined) {
                localVarQueryParameter['includeTotal'] = includeTotal;
            }

            if (filterWabaId !== undefined) {
                localVarQueryParameter['filter.wabaId'] = filterWabaId;
            }


    
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Registers a WhatsApp business phone number.
         * @summary Register a phone number
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register: async (wabaId: string, phoneNumber: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('register', 'wabaId', wabaId)
            // verify required parameter 'phoneNumber' is not null or undefined
            assertParamExists('register', 'phoneNumber', phoneNumber)
            const localVarPath = `/whatsapp/phoneNumbers/{wabaId}/{phoneNumber}/register`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"phoneNumber"}}`, encodeURIComponent(String(phoneNumber)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a WhatsApp business phone number you\'ve registered.
         * @summary Retrieve a phone number
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve: async (wabaId: string, phoneNumber: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('retrieve', 'wabaId', wabaId)
            // verify required parameter 'phoneNumber' is not null or undefined
            assertParamExists('retrieve', 'phoneNumber', phoneNumber)
            const localVarPath = `/whatsapp/phoneNumbers/{wabaId}/{phoneNumber}`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"phoneNumber"}}`, encodeURIComponent(String(phoneNumber)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a WhatsApp business phone number\'s commerce settings.
         * @summary Retrieve commerce settings
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCommerceSettings: async (wabaId: string, phoneNumber: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('retrieveCommerceSettings', 'wabaId', wabaId)
            // verify required parameter 'phoneNumber' is not null or undefined
            assertParamExists('retrieveCommerceSettings', 'phoneNumber', phoneNumber)
            const localVarPath = `/whatsapp/phoneNumbers/{wabaId}/{phoneNumber}/whatsappCommerceSettings`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"phoneNumber"}}`, encodeURIComponent(String(phoneNumber)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Retrieves a WhatsApp business phone number\'s profile. Customers can view your business profile by clicking your business\'s name or number in a conversation thread.
         * @summary Retrieve a phone number profile
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveProfile: async (wabaId: string, phoneNumber: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('retrieveProfile', 'wabaId', wabaId)
            // verify required parameter 'phoneNumber' is not null or undefined
            assertParamExists('retrieveProfile', 'phoneNumber', phoneNumber)
            const localVarPath = `/whatsapp/phoneNumbers/{wabaId}/{phoneNumber}/profile`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"phoneNumber"}}`, encodeURIComponent(String(phoneNumber)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a WhatsApp business phone number\'s commerce settings. Use this endpoint to enable or disable the shopping cart or the product catalog for a specific business phone number.
         * @summary Update commerce settings
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {WhatsappCommerceSettingsUpdateRequest} whatsappCommerceSettingsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCommerceSettings: async (wabaId: string, phoneNumber: string, whatsappCommerceSettingsUpdateRequest: WhatsappCommerceSettingsUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('updateCommerceSettings', 'wabaId', wabaId)
            // verify required parameter 'phoneNumber' is not null or undefined
            assertParamExists('updateCommerceSettings', 'phoneNumber', phoneNumber)
            // verify required parameter 'whatsappCommerceSettingsUpdateRequest' is not null or undefined
            assertParamExists('updateCommerceSettings', 'whatsappCommerceSettingsUpdateRequest', whatsappCommerceSettingsUpdateRequest)
            const localVarPath = `/whatsapp/phoneNumbers/{wabaId}/{phoneNumber}/whatsappCommerceSettings`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"phoneNumber"}}`, encodeURIComponent(String(phoneNumber)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;
            localVarRequestOptions.data = serializeDataIfNeeded(whatsappCommerceSettingsUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a WhatsApp business phone number profile.
         * @summary Update a phone number profile
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {WhatsappPhoneNumberProfileUpdateRequest} whatsappPhoneNumberProfileUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile: async (wabaId: string, phoneNumber: string, whatsappPhoneNumberProfileUpdateRequest: WhatsappPhoneNumberProfileUpdateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('updateProfile', 'wabaId', wabaId)
            // verify required parameter 'phoneNumber' is not null or undefined
            assertParamExists('updateProfile', 'phoneNumber', phoneNumber)
            // verify required parameter 'whatsappPhoneNumberProfileUpdateRequest' is not null or undefined
            assertParamExists('updateProfile', 'whatsappPhoneNumberProfileUpdateRequest', whatsappPhoneNumberProfileUpdateRequest)
            const localVarPath = `/whatsapp/phoneNumbers/{wabaId}/{phoneNumber}/profile`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"phoneNumber"}}`, encodeURIComponent(String(phoneNumber)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            if (USER_AGENT) {
                localVarHeaderParameter['User-Agent'] = USER_AGENT;
            }
            const localVarQueryParameter = {} as any;

            // authentication api_key required
            await setApiKeyToObject(localVarHeaderParameter, "X-API-Key", configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;
            localVarRequestOptions.data = serializeDataIfNeeded(whatsappPhoneNumberProfileUpdateRequest, localVarRequestOptions, configuration)

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * WhatsappPhoneNumbersApi - functional programming interface
 * @export
 */
const WhatsappPhoneNumbersApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WhatsappPhoneNumbersApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns a paginated list of WhatsApp business phone numbers you\'ve registered.
         * @summary List phone numbers
         * @param {WhatsappPhoneNumbersApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: WhatsappPhoneNumbersApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappPhoneNumberPage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Registers a WhatsApp business phone number.
         * @summary Register a phone number
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async register(wabaId: string, phoneNumber: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappPhoneNumber>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.register(wabaId, phoneNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a WhatsApp business phone number you\'ve registered.
         * @summary Retrieve a phone number
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieve(wabaId: string, phoneNumber: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappPhoneNumber>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieve(wabaId, phoneNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a WhatsApp business phone number\'s commerce settings.
         * @summary Retrieve commerce settings
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveCommerceSettings(wabaId: string, phoneNumber: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappCommerceSettings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveCommerceSettings(wabaId, phoneNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a WhatsApp business phone number\'s profile. Customers can view your business profile by clicking your business\'s name or number in a conversation thread.
         * @summary Retrieve a phone number profile
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveProfile(wabaId: string, phoneNumber: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappPhoneNumberProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveProfile(wabaId, phoneNumber, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a WhatsApp business phone number\'s commerce settings. Use this endpoint to enable or disable the shopping cart or the product catalog for a specific business phone number.
         * @summary Update commerce settings
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {WhatsappCommerceSettingsUpdateRequest} whatsappCommerceSettingsUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateCommerceSettings(wabaId: string, phoneNumber: string, whatsappCommerceSettingsUpdateRequest: WhatsappCommerceSettingsUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappCommerceSettings>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateCommerceSettings(wabaId, phoneNumber, whatsappCommerceSettingsUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a WhatsApp business phone number profile.
         * @summary Update a phone number profile
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
         * @param {WhatsappPhoneNumberProfileUpdateRequest} whatsappPhoneNumberProfileUpdateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateProfile(wabaId: string, phoneNumber: string, whatsappPhoneNumberProfileUpdateRequest: WhatsappPhoneNumberProfileUpdateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappPhoneNumberProfile>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateProfile(wabaId, phoneNumber, whatsappPhoneNumberProfileUpdateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WhatsappPhoneNumbersApi - factory interface
 * @export
 */
const WhatsappPhoneNumbersApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WhatsappPhoneNumbersApiFp(configuration)
    return {
        /**
         * Returns a paginated list of WhatsApp business phone numbers you\'ve registered.
         * @summary List phone numbers
         * @param {WhatsappPhoneNumbersApiListRequest} requestParameters Request parameters.
         * @param {number} [page] Page number of the results to be returned, 1-based.
         * @param {number} [limit] A limit on the number of results to be returned, or number of results per page, between 1 and 100, defaults to 10.
         * @param {boolean} [includeTotal] Return results inside an object that contains the total result count or not.
         * @param {string} [filterWabaId] **Required if you have more than 100 WABAs.** WhatsApp Business Account ID.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: WhatsappPhoneNumbersApiListRequest = {}, options?: any): AxiosPromise<WhatsappPhoneNumberPage> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Registers a WhatsApp business phone number.
         * @summary Register a phone number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        register(wabaId: string, phoneNumber: string, options?: any): AxiosPromise<WhatsappPhoneNumber> {
            return localVarFp.register(wabaId, phoneNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a WhatsApp business phone number you\'ve registered.
         * @summary Retrieve a phone number
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve(wabaId: string, phoneNumber: string, options?: any): AxiosPromise<WhatsappPhoneNumber> {
            return localVarFp.retrieve(wabaId, phoneNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a WhatsApp business phone number\'s commerce settings.
         * @summary Retrieve commerce settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveCommerceSettings(wabaId: string, phoneNumber: string, options?: any): AxiosPromise<WhatsappCommerceSettings> {
            return localVarFp.retrieveCommerceSettings(wabaId, phoneNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a WhatsApp business phone number\'s profile. Customers can view your business profile by clicking your business\'s name or number in a conversation thread.
         * @summary Retrieve a phone number profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveProfile(wabaId: string, phoneNumber: string, options?: any): AxiosPromise<WhatsappPhoneNumberProfile> {
            return localVarFp.retrieveProfile(wabaId, phoneNumber, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a WhatsApp business phone number\'s commerce settings. Use this endpoint to enable or disable the shopping cart or the product catalog for a specific business phone number.
         * @summary Update commerce settings
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateCommerceSettings(wabaId: string, phoneNumber: string, whatsappCommerceSettingsUpdateRequest: WhatsappCommerceSettingsUpdateRequest, options?: any): AxiosPromise<WhatsappCommerceSettings> {
            return localVarFp.updateCommerceSettings(wabaId, phoneNumber, whatsappCommerceSettingsUpdateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a WhatsApp business phone number profile.
         * @summary Update a phone number profile
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateProfile(wabaId: string, phoneNumber: string, whatsappPhoneNumberProfileUpdateRequest: WhatsappPhoneNumberProfileUpdateRequest, options?: any): AxiosPromise<WhatsappPhoneNumberProfile> {
            return localVarFp.updateProfile(wabaId, phoneNumber, whatsappPhoneNumberProfileUpdateRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in WhatsappPhoneNumbersApi.
 * @export
 * @interface WhatsappPhoneNumbersApiListRequest
 */
export interface WhatsappPhoneNumbersApiListRequest {
    /**
     * Page number of the results to be returned, 1-based.
     * @type {number}
     * @memberof WhatsappPhoneNumbersApiList
     */
    readonly page?: number

    /**
     * A limit on the number of results to be returned, or number of results per page, between 1 and 100, defaults to 10.
     * @type {number}
     * @memberof WhatsappPhoneNumbersApiList
     */
    readonly limit?: number

    /**
     * Return results inside an object that contains the total result count or not.
     * @type {boolean}
     * @memberof WhatsappPhoneNumbersApiList
     */
    readonly includeTotal?: boolean

    /**
     * **Required if you have more than 100 WABAs.** WhatsApp Business Account ID.
     * @type {string}
     * @memberof WhatsappPhoneNumbersApiList
     */
    readonly filterWabaId?: string
}

/**
 * WhatsappPhoneNumbersApi - object-oriented interface
 * @export
 * @class WhatsappPhoneNumbersApi
 * @extends {BaseAPI}
 */
export class WhatsappPhoneNumbersApi extends BaseAPI {
    /**
     * Returns a paginated list of WhatsApp business phone numbers you\'ve registered.
     * @summary List phone numbers
     * @param {WhatsappPhoneNumbersApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappPhoneNumbersApi
     */
    public list(requestParameters: WhatsappPhoneNumbersApiListRequest = {}, options?: AxiosRequestConfig) {
        return WhatsappPhoneNumbersApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Registers a WhatsApp business phone number.
     * @summary Register a phone number
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} phoneNumber Phone number ID.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappPhoneNumbersApi
     */
    public register(wabaId: string, phoneNumber: string, options?: AxiosRequestConfig) {
        return WhatsappPhoneNumbersApiFp(this.configuration).register(wabaId, phoneNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a WhatsApp business phone number you\'ve registered.
     * @summary Retrieve a phone number
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappPhoneNumbersApi
     */
    public retrieve(wabaId: string, phoneNumber: string, options?: AxiosRequestConfig) {
        return WhatsappPhoneNumbersApiFp(this.configuration).retrieve(wabaId, phoneNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a WhatsApp business phone number\'s commerce settings.
     * @summary Retrieve commerce settings
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappPhoneNumbersApi
     */
    public retrieveCommerceSettings(wabaId: string, phoneNumber: string, options?: AxiosRequestConfig) {
        return WhatsappPhoneNumbersApiFp(this.configuration).retrieveCommerceSettings(wabaId, phoneNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a WhatsApp business phone number\'s profile. Customers can view your business profile by clicking your business\'s name or number in a conversation thread.
     * @summary Retrieve a phone number profile
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappPhoneNumbersApi
     */
    public retrieveProfile(wabaId: string, phoneNumber: string, options?: AxiosRequestConfig) {
        return WhatsappPhoneNumbersApiFp(this.configuration).retrieveProfile(wabaId, phoneNumber, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a WhatsApp business phone number\'s commerce settings. Use this endpoint to enable or disable the shopping cart or the product catalog for a specific business phone number.
     * @summary Update commerce settings
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @param {WhatsappCommerceSettingsUpdateRequest} whatsappCommerceSettingsUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappPhoneNumbersApi
     */
    public updateCommerceSettings(wabaId: string, phoneNumber: string, whatsappCommerceSettingsUpdateRequest: WhatsappCommerceSettingsUpdateRequest, options?: AxiosRequestConfig) {
        return WhatsappPhoneNumbersApiFp(this.configuration).updateCommerceSettings(wabaId, phoneNumber, whatsappCommerceSettingsUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a WhatsApp business phone number profile.
     * @summary Update a phone number profile
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} phoneNumber Phone number in [E.164](https://en.wikipedia.org/wiki/E.164) format.
     * @param {WhatsappPhoneNumberProfileUpdateRequest} whatsappPhoneNumberProfileUpdateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappPhoneNumbersApi
     */
    public updateProfile(wabaId: string, phoneNumber: string, whatsappPhoneNumberProfileUpdateRequest: WhatsappPhoneNumberProfileUpdateRequest, options?: AxiosRequestConfig) {
        return WhatsappPhoneNumbersApiFp(this.configuration).updateProfile(wabaId, phoneNumber, whatsappPhoneNumberProfileUpdateRequest, options).then((request) => request(this.axios, this.basePath));
    }
}
