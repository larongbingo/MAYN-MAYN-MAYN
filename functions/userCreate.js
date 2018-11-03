const { hash } = require('bcryptjs');
const fetch = require('node-fetch');

exports.handler = async function(event, context, callback) {
  console.log(event);
  
  const url_root = 'https://mayn-mayn-mayn-chat.herokuapp.com/v1alpha1/graphql';

  if(event.httpMethod !== 'POST') {
    return { 
      statusCode: 400,
      payload: {
        message: 'Invalid HTTP Method'
      }  
    }
  }
  
  const query = `query {
    users(where: {username: {_eq: "user"}}) {
      id
      username
      password
    }
  }`;

  // Check if the username is unique
  let response = await fetch(url_root, {
    method: 'GET',
    headers: {
      'X-Hasura-Access-Key': 'ThatOneNoob',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({query: query})
  });

  let result = response.json();

  console.log(result);

  // Hash the password


  return {
    statusCode: 200,
    body: JSON.stringify(event)
  };
}