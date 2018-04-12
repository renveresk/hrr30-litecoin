import React from 'react';
import ReactDOM from 'react-dom';
import Signup from './components/Signup.jsx'
import $ from 'jquery';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };

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

  componentDidMount() {
  }

  render () {
    return (<div>
      <Signup handleSubmit={this.handleSubmit.bind(this)} />
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));