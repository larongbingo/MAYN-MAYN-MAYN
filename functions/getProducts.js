const fetch = require('node-fetch')
const createToken = require('./utils/createPublicPilonToken')

exports.handler = async function GetProducts(events) {
  let token = await createToken();

  let response = await fetch('https://api.pilon.io/v1/products', {
    method: "GET",
    headers: {
      "Authorization": `Bearer ${token.token}`,
      "accept": "application/json"
    }
  });

  let result = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}