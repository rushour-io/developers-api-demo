/**
 * @file Demonstrate how to retrieve an integration token
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
const integrationId = '<your-integration-id>' // ask to rushour team your integration id
const appSecret = '<your-app-secret>'
const data = {
  scopes: ["public/oauth"]
}

// Create an Oauth app and display app info in console
client.getAccessToken(appId, integrationId, data, appSecret)

// Log responses
//
// [app 233au78mdpjpmfhiu2m7rmgi50] getAccessToken - Success
// {
//   access_token: '<your-integration-token>',
//   expires_in: 3600,
//   token_type: 'Bearer'
// }
