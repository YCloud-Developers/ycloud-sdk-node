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
import { Balance } from '../models';
// @ts-ignore
import { ErrorResponse } from '../models';
/**
 * BalanceApi - axios parameter creator
 * @export
 */
const BalanceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Retrieves the current account balance.
         * @summary Retrieve balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/balance`;
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
 * BalanceApi - functional programming interface
 * @export
 */
const BalanceApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = BalanceApiAxiosParamCreator(configuration)
    return {
        /**
         * Retrieves the current account balance.
         * @summary Retrieve balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async retrieve(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Balance>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.retrieve(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * BalanceApi - factory interface
 * @export
 */
const BalanceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = BalanceApiFp(configuration)
    return {
        /**
         * Retrieves the current account balance.
         * @summary Retrieve balance
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        retrieve(options?: any): AxiosPromise<Balance> {
            return localVarFp.retrieve(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * BalanceApi - object-oriented interface
 * @export
 * @class BalanceApi
 * @extends {BaseAPI}
 */
export class BalanceApi extends BaseAPI {
    /**
     * Retrieves the current account balance.
     * @summary Retrieve balance
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BalanceApi
     */
    public retrieve(options?: AxiosRequestConfig) {
        return BalanceApiFp(this.configuration).retrieve(options).then((request) => request(this.axios, this.basePath));
    }
}
