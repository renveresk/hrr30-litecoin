import React from 'react';
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import Checkbox from 'react-bootstrap/lib/Checkbox';
import Col from 'react-bootstrap/lib/Col';
import Button from 'react-bootstrap/lib/Button';
import ControlLabel from 'react-bootstrap/lib/ControlLabel'

class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }

  }

  //Function triggers when component rendered.
  //If not needed it could be deleted.
  componentDidMount() {
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
            <FormControl type="text" placeholder="Username" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalEmail">
          <Col componentClass={ControlLabel} sm={2}>
            Email
          </Col>
          <Col sm={10}>
            <FormControl type="email" placeholder="Email" />
          </Col>
        </FormGroup>

        <FormGroup controlId="formHorizontalPassword">
          <Col componentClass={ControlLabel} sm={2}>
            Password
          </Col>
          <Col sm={10}>
            <FormControl type="password" placeholder="Password" />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button type="submit">Sign up</Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default Signup;
