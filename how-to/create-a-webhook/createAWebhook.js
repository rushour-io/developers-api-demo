/**
 * @file Demonstrate how to create a webhook
 *
 * Prerequisites:
 * - Your must have a rushour account and been given developer access
 * - Your app and has already been created
 * - Your app has been validated by the rushour team
 */

const axios = require('axios');
const RushourClient = require('../../modules/rushour-client');

// instanciate the rushour client
const deps = {
  logger: console,
  httpClient: axios
}

const options = {
  host: "https://api.rushour.io",
  userToken: '<your-user-token>'

}

const client = new RushourClient(deps, options);



// See the api documentation to see available params
const appId = '<your-app-id>'
const webhookData = {
  host: "<your-webhook-url>", // url of your webhook server
  events: ['IntegrationCreated', 'MenuSaved', 'OrderSaved', 'RestaurantOpened', 'RestaurantClosed']
}

// Create an Oauth app and display app info in console
// IMPORTANT: you app must be validated in order to create a webhook. Otherwise, the api will return 404
client.createWebhook(appId, webhookData)

// Log responses
//
// [app 233au78mdpjpmfhiu2m7rmgi50] createWebhook - Success
// {
//   webhook: {
//     host: '<your-webhook-url>',
//     events: [
//       'IntegrationCreated',
//       'MenuSaved',
//       'OrderSaved',
//       'RestaurantOpened',
//       'RestaurantClosed'
//     ],
//     webhookId: '17f1969f-cf5a-418e-92c4-5ae664fe0d16',
//     createdAt: '2022-08-11T09:14:23.327Z',
//     updatedAt: '2022-08-11T09:14:23.327Z'
//   }
// }
