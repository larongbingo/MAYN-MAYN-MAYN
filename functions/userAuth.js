const fetch = require('node-fetch');
const { Pilon_api_url_auth, environment_id } = require('./utils/constants');

exports.handler = async function UserAuth(events, context) {
  const credentials = JSON.parse(events.body);

  let response = await fetch(Pilon_api_url_auth, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      token_scope: "customer",
      customer_email: credentials.email,
      password: credentials.password,
      environment_id: environment_id
    })
  });

  let result = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}