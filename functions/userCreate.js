const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  console.log(event);

  console.log(JSON.parse(event.body));

  const credentials = JSON.parse(event.body);

  const url = "https://mayn-mayn-mayn-chat.herokuapp.com/v1alpha1/graphql";

  const headers = {
    "X-Hasura-Access-Key": "ThatOneNoob",
    "Content-Type": "application/json"
  }

  const query = `mutation {
    insert_users(objects: [{username: "${credentials.username}", password:"${credentials.password}"}]) {
      affected_rows
      returning {
        id
      }
    }
  }`;

  let response = await fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({query: query})
  })

  let result = await response.json()

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
}