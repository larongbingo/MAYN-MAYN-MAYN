const client = require('./utils/graphql.client')

exports.handler = async function(event, context, callback) {
  console.log(event);
  
  const query = `query {
    users(where: {username: {_eq: "user"}}) {
      id
      username
      password
    }
  }`;

  let result = await client.query({operationName: 'Query', query: query, variables: null});

  return {
    statusCode: 200,
    body: JSON.stringify(result)
  };
}