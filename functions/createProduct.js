const fetch = require('node-fetch');
const createToken = require('./utils/createCustomerPilonToken');
const { environment_id } = require('./utils/constants');

exports.handler = async function createProduct(event) {
  //const productDetails = JSON.stringify(event.body);

  let token = await createToken();

  console.log(token)

  let response = await fetch('https://api.pilon.io/v1/products', {
    methods: "POST",
    headers: {
      "Authorization": `Bearer ${token.token}`,
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      environment: `/v1/environments/${environment_id}`,
      sku: 'asd1231asdasd23',
      name: "asd12asdasd3123",
      short_desc: "as123123123123123123d"
    })
  });

  let result = await response.json();

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  }
}