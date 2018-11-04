const fetch = require('node-fetch');
const createPilonToken = require('./utils/createPublicPilonToken');
const { Hasura_api_url, Pilon_api_url_customers, environment_id } = require('./utils/constants');

exports.handler = async function(event, context) {
  console.log(JSON.parse(event.body));

  if(event.httpMethod !== 'POST') {
    return {
      statusCode: 401
    }
  }

  const credentials = JSON.parse(event.body);

  let token = await createPilonToken();

  try {
    const responsePilon = await fetch(Pilon_api_url_customers, {
      method: 'POST',
      headers: {
        "Authorization": `Bearer ${token.token}`,
        "accept": 'application/json',
        "Content-Type": "application/json",
        
      },
      body: JSON.stringify({
        "environment": `/v1/environments/${environment_id}`,
        email: credentials.email,
        password: credentials.password,
        first_name: credentials.firstName,
        last_name: credentials.lastName
      })
    });
    
    let resultPilon = await responsePilon.json();

    console.log(resultPilon)

    const query = `mutation {
      insert_users(objects: [{id: "${resultPilon.id}", chatName: "${credentials.chatName}"}]) {
        affected_rows
        returning {
          id
        }
      }
    }`;
  
    let responseHasura = await fetch(Hasura_api_url, {
      method: 'POST',
      headers: {
        "X-Hasura-Access-Key": "ThatOneNoob",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({query: query})
    })
  
    let result = await responseHasura.json()

    console.log(result);

    return {
      statusCode: 200,
      body: JSON.stringify(resultPilon)
    }
  }
  catch(err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err)
    }
  }
}