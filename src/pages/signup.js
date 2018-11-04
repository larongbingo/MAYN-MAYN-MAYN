import React from 'react'
import { Form, FormControl, ControlLabel, FormGroup, Col, Button } from 'react-bootstrap'

import Layout from '../components/layout';

// Required fields
// First Name
// Last Name
// Email
// password
// chat name

// Make the customer at Pilon
// Then get the id and store it as an id



export class SignUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      chatName: ''
    }

    this.onChatNameChange = this.onChatNameChange.bind(this);
    this.onFirstNameChange = this.onFirstNameChange.bind(this);
    this.onLastNameChange = this.onLastNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  onFirstNameChange(e) {
    this.setState({firstName: e.target.value});
  }

  onLastNameChange(e) {
    this.setState({lastName: e.target.value});
  }

  onEmailChange(e) {
    this.setState({email: e.target.value});
  }

  onPasswordChange(e) {
    this.setState({password: e.target.value});
  }

  onChatNameChange(e) {
    this.setState({chatName: e.target.value});
  }

  async onSignUpClick(e) {
    // Fetch sign up data to the serverless functions
    let response = await fetch('https://romantic-euler-651676.netlify.com/.netlify/functions/userCreate', {
      body: JSON.stringify({
        email: this.state.email,
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        password: this.state.password,
        chatName: this.state.chatName
      })
    });

    let result = await response.json();

    console.log(response);
    console.log(result);

    // Redirect to home
    window.location = "/";
  }

  render() {
    return (
      <Layout>
        <h1>Sign Up</h1>
    
        <Form horizontal>
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>First Name</Col>
            <Col sm={4}>
              <FormControl
                type="text"
                placeholder="Captain"
                value={this.state.firstName}
                onChange={this.onFirstNameChange}
              />
            </Col>
            <Col componentClass={ControlLabel} sm={2}>Last Name</Col>
            <Col sm={4}>
              <FormControl
                type="text"
                placeholder="Disillusion"
                value={this.state.lastName}
                onChange={this.onLastNameChange}
              />
            </Col>
          </FormGroup>
    
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Chat Name</Col>
            <Col sm={10}>
              <FormControl
                type="text"
                placeholder="The Big D"
                value={this.state.chatName}
                onChange={this.onChatNameChange}
              />
            </Col>
          </FormGroup>
    
          <FormGroup>
            <Col componentClass={ControlLabel} sm={2}>Email</Col>
            <Col sm={4}>
              <FormControl
                type="text"
                placeholder="TheBigD@cptdis.dis"
                value={this.state.email}
                onChange={this.onEmailChange}
              />
            </Col>
    
            <Col componentClass={ControlLabel} sm={2}>Password</Col>
            <Col sm={4}>
              <FormControl
                type="text"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onPasswordChange}
              />
            </Col>
          </FormGroup>
    
          <FormGroup>
            <Col smOffset={2}>
              <Button onClick={this.onSignUpClick}>Sign Up</Button>
            </Col>
          </FormGroup>
          
        </Form>
      </Layout>
    )
  }
}

export default SignUp