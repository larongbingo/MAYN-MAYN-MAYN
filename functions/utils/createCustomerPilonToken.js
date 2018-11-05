const fetch = require('node-fetch');
const { Pilon_api_url_auth, environment_id } = require('./constants');

module.exports = async function createCustomerPilonToken(event) {
  let credentials = {
    email: 'testing@test.com',
    password: 'asd'
  }

  let response = await fetch(Pilon_api_url_auth, {
    method: "POST",
    headers: {
      "Accept": 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      token_scope: "customer",
      environment_id: environment_id,
      customer_email: credentials.email,
      password: credentials.password
    })
  });

  let result = await response.json();

  return result
}