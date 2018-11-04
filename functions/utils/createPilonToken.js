const fetch = require('node-fetch');

module.exports = async function createPilonToken(token_scope) {
  const url = 'https://api.pilon.io/v1/token';
  const environment_id = "ece2ea78-dff3-11e8-a0d7-53f8f57f6759";

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      "Accept": 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      environment_id: environment_id,
      token_scope: token_scope
    })
  });

  let result = await response.json();

  return result;
}
