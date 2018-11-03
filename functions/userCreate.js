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
  
  return {
    statusCode: 200,
    payload: event
  };
}