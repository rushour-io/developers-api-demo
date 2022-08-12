/**
 * @file Demonstrate how to create a webhook server end receive event
 *
 * Prerequisites:
 * - Your must have a rushour account and been given developer access
 * - Your app and has already been created
 * - Your app has been validated by the rushour team
 * - You have created a webhook using Rushour API
 */

const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3000

app.use(bodyParser.json());

app.post('/', (req, res) => {
  console.log('webhook server has been called. Request content:')
  const event = req.body.event

  switch(event) {
    case 'IntegrationCreated':
      // Do something with the response
      break;
    case 'MenuSaved':
      // Do something with the response
      break;
    case 'OrderSaved':
      // Do something with the response
      break;
    default:
      console.log('event not used')
  }

  res.json({ result: 'ok' })
})

app.listen(port, () => {
  console.log(`Webhook server app listening on port ${port}`)
})
