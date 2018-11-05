import React from 'react'

import cookies from '../utils/cookies'
import Layout from '../components/layout'

export class LogOut extends React.Component {
  onLoad() {
    cookies.remove('session');

    window.location = '/'
  }

  render() {
    return (
      <Layout>
        <h1 onLoad={this.onLoad}>Logging Out</h1>
      </Layout>
    )
  }
}

export default LogOut