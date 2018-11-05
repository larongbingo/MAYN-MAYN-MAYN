const fetch = require('node-fetch')

exports.createPages = ({graphql, actions}) => {
  const { createPage } = actions;

  return new Promise((res, rej) => {
    const itemsTemplate = path.resolve(`src/templates/items`);

    res(
      fetch('')
    )
    
  });
}