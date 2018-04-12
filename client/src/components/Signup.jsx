import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
    //console.log(this.state.username);
  }

  handleEmailChange(e) {
    this.setState({ email: e.target.value });
    //console.log(this.state.email);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    //console.log(this.state.password);
  }

  handleSubmit(username, email, password) {
    console.log('Submitting get request....');
    console.log(username);
    console.log(email);
    console.log(password);
    $.ajax({
      url: "/signup",
      method: "POST",
      contentType: "application/JSON",
      data: JSON.stringify({username: username, email: email, password: password})
    }).done(function(res) {
      console.log(res);
    }).fail(function(err) {
      console.log(err);
    });
  }

  handleClick() {
    console.log("I have been clicked!!!");
    this.handleSubmit(this.state.username, this.state.email, this.state.password);
  }

  //Look at https://react-bootstrap.github.io/components/forms/
  //Issues with CSS needs to be resolved.
  render () {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalUsername">
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl
            type="text"
            value={this.state.username}
            onChange={this.handleUsernameChange.bind(this)}
            placeholder="Username" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl
            type="email"
            value={this.state.email}
            onChange={this.handleEmailChange.bind(this)}
            placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange.bind(this)}
            placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.handleClick.bind(this)}>Sign up</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Signup;
