const fetch = require('node-fetch');
const { Hasura_api_url } = require('./utils/constants');

exports.handler = async function SendMessage(events) {
  const message = JSON.parse(events.body);

  const query = `
    mutation{
      insert_messages(objects: [{chatName: "${message.chatName}", message: "${message.message}", product_id: "${message.productId}"}]) {
        returning {
          id
        }
        affected_rows
      }
    }
  `;

  const response = await fetch(Hasura_api_url, {
    method: "POST",
    headers: {
      "X-Hasura-Access-Key": "ThatOneNoob",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({query: query})
  });

  const result = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}