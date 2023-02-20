# YCloud SDK for Node.js

YCloud API
- API version: v2

The [YCloud](https://ycloud.com) API is organized around [REST](https://en.wikipedia.org/wiki/Representational_state_transfer). Our API is designed to have predictable, resource-oriented URLs, return [JSON](https://www.json.org) responses, and use standard HTTP response codes and verbs.


## Requirements

Node 8 or higher.

## Installation

```shell
npm install @ycloud-cpaas/ycloud-sdk-node
```

## Getting Started

### Usage with TypeScript

Please follow the [installation](#installation) instruction and execute the following code:

```typescript
import * as ycloud from '@ycloud-cpaas/ycloud-sdk-node'


const configuration = new ycloud.Configuration({apiKey: 'YOUR_API_KEY'});
const api = new ycloud.BalanceApi(configuration);
api.retrieve()
.then(value => {
  console.log('API called successfully. Returned data:', value.data);
})
.catch(reason => {
  console.error(reason.response.data);
});

```

## Documentation for API Endpoints

All URIs are relative to *https://api.ycloud.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*BalanceApi* | **retrieve** | **GET** /balance | Retrieve balance
*EmailsApi* | **send** | **POST** /emails | Send an email
*SmsApi* | **list** | **GET** /sms | List SMS records
*SmsApi* | **send** | **POST** /sms | Send an SMS
*VerifyApi* | **check** | **POST** /verify/verificationChecks | Check a verification
*VerifyApi* | **send** | **POST** /verify/verifications | Start a verification
*VoicesApi* | **list** | **GET** /voices | List voice records
*VoicesApi* | **send** | **POST** /voices | Send a voice code
*WebhookEndpointsApi* | **create** | **POST** /webhookEndpoints | Create a webhook endpoint
*WebhookEndpointsApi* | **delete** | **DELETE** /webhookEndpoints/{id} | Delete a webhook endpoint
*WebhookEndpointsApi* | **list** | **GET** /webhookEndpoints | List webhook endpoints
*WebhookEndpointsApi* | **retrieve** | **GET** /webhookEndpoints/{id} | Retrieve a webhook endpoint
*WebhookEndpointsApi* | **rotateSecret** | **POST** /webhookEndpoints/{id}/rotateSecret | Rotate a webhook endpoint secret
*WebhookEndpointsApi* | **update** | **PATCH** /webhookEndpoints/{id} | Update a webhook endpoint
*WhatsappBusinessAccountsApi* | **list** | **GET** /whatsapp/businessAccounts | List WABAs
*WhatsappBusinessAccountsApi* | **retrieve** | **GET** /whatsapp/businessAccounts/{id} | Retrieve a WABA
*WhatsappMessagesApi* | **retrieve** | **GET** /whatsapp/messages/{id} | Retrieve a WhatsApp message
*WhatsappMessagesApi* | **send** | **POST** /whatsapp/messages | Send a WhatsApp message
*WhatsappPhoneNumbersApi* | **list** | **GET** /whatsapp/phoneNumbers | List WhatsApp phone numbers
*WhatsappPhoneNumbersApi* | **retrieve** | **GET** /whatsapp/phoneNumbers/{wabaId}/{phoneNumber} | Retrieve a WhatsApp phone number
*WhatsappPhoneNumbersApi* | **retrieveProfile** | **GET** /whatsapp/phoneNumbers/{wabaId}/{phoneNumber}/profile | Retrieve a WhatsApp phone number profile
*WhatsappPhoneNumbersApi* | **updateProfile** | **PATCH** /whatsapp/phoneNumbers/{wabaId}/{phoneNumber}/profile | Update a WhatsApp phone number profile
*WhatsappTemplatesApi* | **create** | **POST** /whatsapp/templates | Create a WhatsApp template
*WhatsappTemplatesApi* | **deleteByName** | **DELETE** /whatsapp/templates/{wabaId}/{name} | Delete WhatsApp templates by name
*WhatsappTemplatesApi* | **editByNameAndLanguage** | **PATCH** /whatsapp/templates/{wabaId}/{name}/{language} | Edit a WhatsApp template
*WhatsappTemplatesApi* | **list** | **GET** /whatsapp/templates | List WhatsApp templates
*WhatsappTemplatesApi* | **retrieveByNameAndLanguage** | **GET** /whatsapp/templates/{wabaId}/{name}/{language} | Retrieve a WhatsApp template


## Documentation for Authorization

Authentication schemes defined for the API:
### api_key

- **Type**: API key
- **API key parameter name**: X-API-Key
- **Location**: HTTP header
