/**
 * @file Demonstrate how to create an Oauth app in the rushour system
 *
 * Prerequisites:
 * - Your must have a rushour account and been given developer access
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


// just a name is needed to create an app
const appData = {
  name: "Marvelous Food App"
}

// Create an Oauth app and display app info in console
client.createApplication(appData)

// Log responses
//
// [app] createApplication - Success
// {
//   app: {
//     name: 'Marvelous Food App',
//     state: 'IN_DEVELOPMENT',
//     scopes: [ 'public/oauth' ],
//     isValidated: false,
//     resourceOwner: 'john.doe',
//     appId: '233au78mdpjpmfhiu2m7rmgi50',
//     appSecret: 'ieghdmkfphkab5sa3t0b1j9v40lldlf5fmbe780lvest3jnlbq1'
//   }
// }
