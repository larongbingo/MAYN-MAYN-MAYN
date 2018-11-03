const { hash } = require('bcryptjs');

exports.handler = async function(event, context, callback) {
  console.log(event, context, callback);
  callback(null, event);
}