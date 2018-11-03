const { hash } = require('bcryptjs');
const FetchQL = require('fetchql');

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

  const headers = {
    'X-Hasura-Access-Key': 'ThatOneNoob',
    'Content-Type': 'application/json'
  };


  const Query = new FetchQL({url: url_root, headers: headers});

  const result = await Query.query({operationName: 'POST', query: query});

  // Hash the password


  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
}