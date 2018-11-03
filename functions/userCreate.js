const { hash } = require('bcryptjs');

exports.handler = async function(event, context, callback) {
  console.log(event);
  
  if(event.httpMethod !== 'POST') {
    return { 
      statusCode: 400,
      payload: {
        message: 'Invalid HTTP Method'
      }  
    }
  }
  
  // Check if the username is unique
  // Hash the password

  return {
    statusCode: 200,
    body: JSON.stringify(event)
  };
}