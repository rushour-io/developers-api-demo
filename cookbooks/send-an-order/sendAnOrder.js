/**
 * @file Demonstrate how to send an order into the rushour system
 *
 * Prerequisites:
 * - Your must have a rushour account and been given developer access
 * - Your app and has already been created
 * - Your app has been validated by the rushour team
 * - You have retrieve your integration token
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
  userToken: "<yous-user-token>"
}

const client = new RushourClient(deps, options);
client.integrationToken = '<your-integration-token>'
const appId = "<your-app-id>"
const integrationId = "<your-integration-id>"

// Create an order in rushour format
const order = {
  instructions: "SANS LES COUVERTS",
  orderedAt: "2022-08-02T10:18:38.000Z",
  status: "new",
  total: 1190,
  couriers: [
    {
      name: "Mehdi D.",
      phone: "+33152364487",
      estimatedArrival: "2022-08-02T10:35:51Z"
    }
  ],
  lastUpdatedAt: "2022-08-04T09:37:14.772Z",
  pickedUpAt: null,
  completedAt: null,
  acceptedAt: null,
  readiedAt: null,
  items: [],
  fees: [],
  preview: "Des pates aux chou",
  discount: 0,
  externalId: "1242179412",
  displayId: "9412",
  isPaid: true,
  paymentMethod: "card",
  customer: {
    name: "Alia B.",
    orderCount: 3,
    address: {
      address: "8 rue des amies"
    },
    phone: "33148624183"
  },
  id: "1242179412",
  prepareBy: "2022-08-02T10:36:16.000Z",
  actions: [],
  cutleryRequested: true,
  type: "delivery"
}

// Send order to rushour system
client.uploadOrder(appId, integrationId, order)

// Log responses
//
// [app 233au78mdpjpmfhiu2m7rmgi50] uploadOrder - Success
// {}
