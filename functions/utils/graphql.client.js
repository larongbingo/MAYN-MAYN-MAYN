//const ApolloClient = require('apollo-boost');
//
//const client = new ApolloClient({
//  uri: 'https://mayn-mayn-mayn-chat.herokuapp.com/v1alpha1/graphql',
//  headers: {
//    'X-Hasura-Access-Key': 'ThatOneNoob',
//    'Content-Type': 'application/json'
//  }
//});

const fetch = require('node-fetch/browser');
const FetchQl = require('fetchql').default;


const client = new FetchQl({
  url: 'https://mayn-mayn-mayn-chat.herokuapp.com/v1alpha1/graphql', 
  headers: {
    'X-Hasura-Access-Key': 'ThatOneNoob',
    'Content-Type': 'application/json'
  }
})

module.exports = client;