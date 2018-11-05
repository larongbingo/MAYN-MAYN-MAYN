import React from 'react'

import cookies from '../utils/cookies'
import Layout from '../components/layout'

export class LogOut extends React.Component {
  constructor(props, context) {
    super(props, context);

    cookies.remove('session');

    window.location = '/'
  }

  render() {
    return (
      <Layout>
        <h1>Logging Out</h1>
      </Layout>
    )
  }
}

export default LogOut