import React from 'react'
import Helmet from 'react-helmet'

const HelmetConfig = ({title}) => (
  <Helmet
    title={title}
    meta={[
      { name: 'MAYN! MAYN! MAYN', content: 'An auction web app where you have to send "MINE!" to place a bid' },
    ]}
  >
    <html lang="en" />
    <link 
      rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" 
      integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" 
      crossorigin="anonymous" 
    />
  </Helmet>
);

export default HelmetConfig;