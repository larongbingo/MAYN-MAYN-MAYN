import React from 'react'
import { FormGroup, FormControl, ControlLabel, Button, Form, Col } from 'react-bootstrap'

import Layout from '../components/layout';
import cookie from '../utils/cookies'

export class LogIn extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      username: '',
      password: ''
    }

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onLogInClick = this.onLogInClick.bind(this);
  }

  onUsernameChange(e) {
    this.setState({username: e.target.value});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }

  async onLogInClick(e) {
    let response = await fetch('https://romantic-euler-651676.netlify.com/.netlify/functions/userAuth', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: this.state.username,
        password: this.state.password
      })
    })

    let result = await response.json();

    cookie.set('session', result);

    console.log(response)
    console.log(result)

    window.location = '/';
  }

  render() {
    return (
      <Layout>
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Username</Col>
            <Col sm={10}>
              <FormControl 
                type="text"
                placeholder="Username"
                value={this.state.username}
                onChange={this.onUsernameChange}
              />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Password</Col>
            <Col sm={10}>
              <FormControl 
                type="password"
                placeholder="Password"
              />
            </Col>
          </FormGroup>
          
          <FormGroup>
            <Col smOffset={2} sm={12}>
              <Button onClick={this.onLogInClick}>Log In</Button>
            </Col>
          </FormGroup>
        </Form>
      </Layout>
    )
  }
}

export default LogIn