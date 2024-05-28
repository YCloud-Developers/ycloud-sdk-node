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
import { WhatsappTemplate } from '../models';
// @ts-ignore
import { WhatsappTemplateCreateRequest } from '../models';
// @ts-ignore
import { WhatsappTemplateEditRequest } from '../models';
// @ts-ignore
import { WhatsappTemplatePage } from '../models';
/**
 * WhatsappTemplatesApi - axios parameter creator
 * @export
 */
const WhatsappTemplatesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Creates a WhatsApp template.
         * @summary Create a template
         * @param {WhatsappTemplateCreateRequest} whatsappTemplateCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create: async (whatsappTemplateCreateRequest: WhatsappTemplateCreateRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'whatsappTemplateCreateRequest' is not null or undefined
            assertParamExists('create', 'whatsappTemplateCreateRequest', whatsappTemplateCreateRequest)
            const localVarPath = `/whatsapp/templates`;
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


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            // setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.params = localVarQueryParameter;
            localVarRequestOptions.data = serializeDataIfNeeded(whatsappTemplateCreateRequest, localVarRequestOptions, configuration)

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Deletes WhatsApp templates by name. If that template name exists in multiple languages, all languages will be deleted. HTTP status `404` is returned if no templates are found for the specific name.
         * @summary Delete templates by name
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} name Name of the template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteByName: async (wabaId: string, name: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('deleteByName', 'wabaId', wabaId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteByName', 'name', name)
            const localVarPath = `/whatsapp/templates/{wabaId}/{name}`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Deletes a WhatsApp template by name and language.
         * @summary Delete a template
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} name Name of the template.
         * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteByNameAndLanguage: async (wabaId: string, name: string, language: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('deleteByNameAndLanguage', 'wabaId', wabaId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('deleteByNameAndLanguage', 'name', name)
            // verify required parameter 'language' is not null or undefined
            assertParamExists('deleteByNameAndLanguage', 'language', language)
            const localVarPath = `/whatsapp/templates/{wabaId}/{name}/{language}`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"language"}}`, encodeURIComponent(String(language)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            // const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
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
         * Edits a WhatsApp template by name and language. Editing a template replaces its old contents entirely, so include any components you wish to preserve as well as components you wish to update using the components parameter.
         * @summary Edit a template
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} name Name of the template.
         * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
         * @param {WhatsappTemplateEditRequest} [whatsappTemplateEditRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editByNameAndLanguage: async (wabaId: string, name: string, language: string, whatsappTemplateEditRequest?: WhatsappTemplateEditRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('editByNameAndLanguage', 'wabaId', wabaId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('editByNameAndLanguage', 'name', name)
            // verify required parameter 'language' is not null or undefined
            assertParamExists('editByNameAndLanguage', 'language', language)
            const localVarPath = `/whatsapp/templates/{wabaId}/{name}/{language}`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"language"}}`, encodeURIComponent(String(language)));
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
            localVarRequestOptions.data = serializeDataIfNeeded(whatsappTemplateEditRequest, localVarRequestOptions, configuration)

            return {
                url: localVarPath,
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a paginated list of WhatsApp templates you\'ve previously created.
         * @summary List templates
         * @param {WhatsappTemplatesApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list: async (requestParameters: WhatsappTemplatesApiListRequest = {}, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            let page = requestParameters['page'];
            let limit = requestParameters['limit'];
            let includeTotal = requestParameters['includeTotal'];
            let filterWabaId = requestParameters['filterWabaId'];
            let filterName = requestParameters['filterName'];
            let filterLanguage = requestParameters['filterLanguage'];
            const localVarPath = `/whatsapp/templates`;
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

            if (filterName !== undefined) {
                localVarQueryParameter['filter.name'] = filterName;
            }

            if (filterLanguage !== undefined) {
                localVarQueryParameter['filter.language'] = filterLanguage;
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
         * Retrieves a WhatsApp template by name and language.
         * @summary Retrieve a template
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} name Name of the template.
         * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveByNameAndLanguage: async (wabaId: string, name: string, language: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'wabaId' is not null or undefined
            assertParamExists('retrieveByNameAndLanguage', 'wabaId', wabaId)
            // verify required parameter 'name' is not null or undefined
            assertParamExists('retrieveByNameAndLanguage', 'name', name)
            // verify required parameter 'language' is not null or undefined
            assertParamExists('retrieveByNameAndLanguage', 'language', language)
            const localVarPath = `/whatsapp/templates/{wabaId}/{name}/{language}`
                .replace(`{${"wabaId"}}`, encodeURIComponent(String(wabaId)))
                .replace(`{${"name"}}`, encodeURIComponent(String(name)))
                .replace(`{${"language"}}`, encodeURIComponent(String(language)));
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
    }
};

/**
 * WhatsappTemplatesApi - functional programming interface
 * @export
 */
const WhatsappTemplatesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = WhatsappTemplatesApiAxiosParamCreator(configuration)
    return {
        /**
         * Creates a WhatsApp template.
         * @summary Create a template
         * @param {WhatsappTemplateCreateRequest} whatsappTemplateCreateRequest 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async create(whatsappTemplateCreateRequest: WhatsappTemplateCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappTemplate>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.create(whatsappTemplateCreateRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes WhatsApp templates by name. If that template name exists in multiple languages, all languages will be deleted. HTTP status `404` is returned if no templates are found for the specific name.
         * @summary Delete templates by name
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} name Name of the template.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteByName(wabaId: string, name: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<WhatsappTemplate>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteByName(wabaId, name, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Deletes a WhatsApp template by name and language.
         * @summary Delete a template
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} name Name of the template.
         * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async deleteByNameAndLanguage(wabaId: string, name: string, language: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappTemplate>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.deleteByNameAndLanguage(wabaId, name, language, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Edits a WhatsApp template by name and language. Editing a template replaces its old contents entirely, so include any components you wish to preserve as well as components you wish to update using the components parameter.
         * @summary Edit a template
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} name Name of the template.
         * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
         * @param {WhatsappTemplateEditRequest} [whatsappTemplateEditRequest] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async editByNameAndLanguage(wabaId: string, name: string, language: string, whatsappTemplateEditRequest?: WhatsappTemplateEditRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappTemplate>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.editByNameAndLanguage(wabaId, name, language, whatsappTemplateEditRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a paginated list of WhatsApp templates you\'ve previously created.
         * @summary List templates
         * @param {WhatsappTemplatesApiListRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async list(requestParameters: WhatsappTemplatesApiListRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappTemplatePage>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.list(requestParameters, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Retrieves a WhatsApp template by name and language.
         * @summary Retrieve a template
         * @param {string} wabaId WhatsApp Business Account ID.
         * @param {string} name Name of the template.
         * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieveByNameAndLanguage(wabaId: string, name: string, language: string, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<WhatsappTemplate>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieveByNameAndLanguage(wabaId, name, language, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * WhatsappTemplatesApi - factory interface
 * @export
 */
const WhatsappTemplatesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = WhatsappTemplatesApiFp(configuration)
    return {
        /**
         * Creates a WhatsApp template.
         * @summary Create a template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        create(whatsappTemplateCreateRequest: WhatsappTemplateCreateRequest, options?: any): AxiosPromise<WhatsappTemplate> {
            return localVarFp.create(whatsappTemplateCreateRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes WhatsApp templates by name. If that template name exists in multiple languages, all languages will be deleted. HTTP status `404` is returned if no templates are found for the specific name.
         * @summary Delete templates by name
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteByName(wabaId: string, name: string, options?: any): AxiosPromise<Array<WhatsappTemplate>> {
            return localVarFp.deleteByName(wabaId, name, options).then((request) => request(axios, basePath));
        },
        /**
         * Deletes a WhatsApp template by name and language.
         * @summary Delete a template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        deleteByNameAndLanguage(wabaId: string, name: string, language: string, options?: any): AxiosPromise<WhatsappTemplate> {
            return localVarFp.deleteByNameAndLanguage(wabaId, name, language, options).then((request) => request(axios, basePath));
        },
        /**
         * Edits a WhatsApp template by name and language. Editing a template replaces its old contents entirely, so include any components you wish to preserve as well as components you wish to update using the components parameter.
         * @summary Edit a template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        editByNameAndLanguage(wabaId: string, name: string, language: string, whatsappTemplateEditRequest?: WhatsappTemplateEditRequest, options?: any): AxiosPromise<WhatsappTemplate> {
            return localVarFp.editByNameAndLanguage(wabaId, name, language, whatsappTemplateEditRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a paginated list of WhatsApp templates you\'ve previously created.
         * @summary List templates
         * @param {WhatsappTemplatesApiListRequest} requestParameters Request parameters.
         * @param {number} [page] Page number of the results to be returned, 1-based.
         * @param {number} [limit] A limit on the number of results to be returned, or number of results per page, between 1 and 100, defaults to 10.
         * @param {boolean} [includeTotal] Return results inside an object that contains the total result count or not.
         * @param {string} [filterWabaId] **Required if you have more than 100 WABAs.** WhatsApp Business Account ID.
         * @param {string} [filterName] Name of the template.
         * @param {string} [filterLanguage] Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        list(requestParameters: WhatsappTemplatesApiListRequest = {}, options?: any): AxiosPromise<WhatsappTemplatePage> {
            return localVarFp.list(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Retrieves a WhatsApp template by name and language.
         * @summary Retrieve a template
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieveByNameAndLanguage(wabaId: string, name: string, language: string, options?: any): AxiosPromise<WhatsappTemplate> {
            return localVarFp.retrieveByNameAndLanguage(wabaId, name, language, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for list operation in WhatsappTemplatesApi.
 * @export
 * @interface WhatsappTemplatesApiListRequest
 */
export interface WhatsappTemplatesApiListRequest {
    /**
     * Page number of the results to be returned, 1-based.
     * @type {number}
     * @memberof WhatsappTemplatesApiList
     */
    readonly page?: number

    /**
     * A limit on the number of results to be returned, or number of results per page, between 1 and 100, defaults to 10.
     * @type {number}
     * @memberof WhatsappTemplatesApiList
     */
    readonly limit?: number

    /**
     * Return results inside an object that contains the total result count or not.
     * @type {boolean}
     * @memberof WhatsappTemplatesApiList
     */
    readonly includeTotal?: boolean

    /**
     * **Required if you have more than 100 WABAs.** WhatsApp Business Account ID.
     * @type {string}
     * @memberof WhatsappTemplatesApiList
     */
    readonly filterWabaId?: string

    /**
     * Name of the template.
     * @type {string}
     * @memberof WhatsappTemplatesApiList
     */
    readonly filterName?: string

    /**
     * Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
     * @type {string}
     * @memberof WhatsappTemplatesApiList
     */
    readonly filterLanguage?: string
}

/**
 * WhatsappTemplatesApi - object-oriented interface
 * @export
 * @class WhatsappTemplatesApi
 * @extends {BaseAPI}
 */
export class WhatsappTemplatesApi extends BaseAPI {
    /**
     * Creates a WhatsApp template.
     * @summary Create a template
     * @param {WhatsappTemplateCreateRequest} whatsappTemplateCreateRequest 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappTemplatesApi
     */
    public create(whatsappTemplateCreateRequest: WhatsappTemplateCreateRequest, options?: AxiosRequestConfig) {
        return WhatsappTemplatesApiFp(this.configuration).create(whatsappTemplateCreateRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes WhatsApp templates by name. If that template name exists in multiple languages, all languages will be deleted. HTTP status `404` is returned if no templates are found for the specific name.
     * @summary Delete templates by name
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} name Name of the template.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappTemplatesApi
     */
    public deleteByName(wabaId: string, name: string, options?: AxiosRequestConfig) {
        return WhatsappTemplatesApiFp(this.configuration).deleteByName(wabaId, name, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Deletes a WhatsApp template by name and language.
     * @summary Delete a template
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} name Name of the template.
     * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappTemplatesApi
     */
    public deleteByNameAndLanguage(wabaId: string, name: string, language: string, options?: AxiosRequestConfig) {
        return WhatsappTemplatesApiFp(this.configuration).deleteByNameAndLanguage(wabaId, name, language, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Edits a WhatsApp template by name and language. Editing a template replaces its old contents entirely, so include any components you wish to preserve as well as components you wish to update using the components parameter.
     * @summary Edit a template
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} name Name of the template.
     * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
     * @param {WhatsappTemplateEditRequest} [whatsappTemplateEditRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappTemplatesApi
     */
    public editByNameAndLanguage(wabaId: string, name: string, language: string, whatsappTemplateEditRequest?: WhatsappTemplateEditRequest, options?: AxiosRequestConfig) {
        return WhatsappTemplatesApiFp(this.configuration).editByNameAndLanguage(wabaId, name, language, whatsappTemplateEditRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a paginated list of WhatsApp templates you\'ve previously created.
     * @summary List templates
     * @param {WhatsappTemplatesApiListRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappTemplatesApi
     */
    public list(requestParameters: WhatsappTemplatesApiListRequest = {}, options?: AxiosRequestConfig) {
        return WhatsappTemplatesApiFp(this.configuration).list(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Retrieves a WhatsApp template by name and language.
     * @summary Retrieve a template
     * @param {string} wabaId WhatsApp Business Account ID.
     * @param {string} name Name of the template.
     * @param {string} language Language code of the template. See [Supported Languages](https://developers.facebook.com/docs/whatsapp/api/messages/message-templates#supported-languages) for all codes.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof WhatsappTemplatesApi
     */
    public retrieveByNameAndLanguage(wabaId: string, name: string, language: string, options?: AxiosRequestConfig) {
        return WhatsappTemplatesApiFp(this.configuration).retrieveByNameAndLanguage(wabaId, name, language, options).then((request) => request(this.axios, this.basePath));
    }
}
