/**
 * @file Demonstrate how to update an Oauth app in the rushour system
 *
 * Prerequisites:
 * - Your must have a rushour account and been given developer access
 * - Your app and has already been created
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

}

const client = new RushourClient(deps, options);

client.userToken = '<your-user-token>'

// See the api documentation to see available params
const appId = '<your-app-id>'
const appData = {
  name: "Hyper Marvelous Food App"
}

// Update an Oauth app and display app info in console
client.updateApplication(appId, appData)

// Log responses
//
// [app 233au78mdpjpmfhiu2m7rmgi50] updateApplication - Success
// {
//   app: {
//     resourceOwner: 'john.doe',
//     updatedAt: '2022-08-11T09:00:15.086Z',
//     createdAt: '2022-08-11T08:53:15.619Z',
//     scopes: [ 'public/oauth' ],
//     isValidated: false,
//     appId: '233au78mdpjpmfhiu2m7rmgi50',
//     name: 'Hyper Marvelous Food App',
//     state: 'IN_DEVELOPMENT'
//   }
// }
