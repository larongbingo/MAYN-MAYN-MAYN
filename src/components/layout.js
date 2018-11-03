import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { Grid } from 'react-bootstrap'

import Header from './header'
import HelmetConfig from './helmet'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <HelmetConfig title={data.site.siteMetadata.title} />
        <Header siteTitle={data.site.siteMetadata.title} />
        <Grid>
          {children}
        </Grid>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
