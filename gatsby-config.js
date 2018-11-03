module.exports = {
  siteMetadata: {
    title: 'MAYN! MAYN! MAYN!',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'MAYN! MAYN! MAYN!',
        short_name: 'MAYN!',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'MAYN',
        fieldName: 'mayn',
        url: 'https://mayn-mayn-mayn-chat.herokuapp.com/v1alpha1/graphql',
        headers: {
          "X-Hasura-Access-Key": "ThatOneNoob",
          "Content-Type": "application/json"
        }
      }
    }, 
    'gatsby-plugin-offline',
  ],
}
