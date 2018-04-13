import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './components/Signup.jsx'
import $ from 'jquery';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
      // remember: false // for adding more functionality later
    };
  }

  componentDidMount() {
  }

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
    //console.log(this.state.username);
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
    //console.log(this.state.username);
  }

  onButtonClick() {
    // need to change this to interact with server on click
    console.log(this.state);
  }

  // need to add functionality for redirecting to signup page when signup button is clicked
  render () {
    return (
      <Form horizontal>
        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Username
          </Col>
          <Col sm={10}>
            <FormControl
            type="username"
            value={this.state.username}
            onChange={this.handleUsernameChange.bind(this)}
            placeholder="Username" />
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
            <Checkbox>Remember me</Checkbox>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit" onClick={this.onButtonClick.bind(this)}>Sign in</Button>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="button">Sign up</Button>
          </Col>
        </FormGroup>
      </Form>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));