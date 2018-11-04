const fetch = require('node-fetch');

// For customer data, customer update and customer creation
// For any reading this, yes I know I should put the client_id 
// and client_secret on an environment variable and call it 
// in process.env.[NAME], but this will not be an active project
// so pls delet
module.exports = async function createEnvironmentPilonToken() {
  const url = 'https://api.pilon.io/v1/token';
  //const environment_id = "28ac04ce-e01a-11e8-8947-c180050c48e3";
  const token_scope = "environment";
  const client_id = "292f8e5c-e01a-11e8-884f-1788371d8f98";
  const client_secret = "5cf9cb2701bfcd83e4627c5bb63cd2bc48128ea64f8cc6761c4ffccb9fdab7c8";

  let response = await fetch(url, {
    method: 'POST',
    headers: {
      "Accept": 'application/json',
      "Content-Type": 'application/json'
    },
    body: JSON.stringify({
      token_scope: token_scope,
      client_id: client_id,
      client_secret: client_secret
    })
  });

  console.log(JSON.stringify({
    token_scope: token_scope,
    client_id: client_id,
    client_secret: client_secret
  }))

  let result = await response.json();

  return result;
}