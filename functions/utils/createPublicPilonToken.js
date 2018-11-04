const fetch = require('node-fetch');

// For public data
module.exports = async function createPublicPilonToken() {
  const url = 'https://api.pilon.io/v1/token';
  const environment_id = "28ac04ce-e01a-11e8-8947-c180050c48e3";
  const token_scope = 'public';

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
