import React from "react";
import { Form, Icon, Input, Button } from 'antd';
import {Link} from "react-router-dom";
import {withRouter} from "react-router";

import GoogleAuth from "./GoogleAuth";
import $ from 'jquery';

class SignInForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
    this.emailChange = this.emailChange.bind(this);
    this.passwordChange = this.passwordChange.bind(this);
    this.submit = this.submit.bind(this);
    this.getConnection = this.getConnection.bind(this);
  }

  emailChange(e) {
    this.setState({email : e.target.value})
  }

  passwordChange(e) {
    this.setState({password : e.target.value})
  }

  submit() {
    this.getConnection();
  }

  getConnection() {
    let text = {email: this.state.email, password: this.state.password}
    let send = JSON.stringify(text);

    fetch(`http://localhost:8181/trainee/login`, {
      method: 'POST',
      headers: {'Content-Type':'application/json; charset=utf-8'},
      body: send
    }).then(res => res.json()).then(
      data => {
        if (data.status === 'OK') this.props.history.push('/trainee');
        else if (data.status === 'invalid email') window.alert('Invalid Email');
        else if (data.status === 'email cannot be empty!') window.alert('Email cannot be empty!');
        else if (data.status === 'password cannot be empty!') window.alert('Password cannot be empty!');
        else if (data.status === 'invalid password') window.alert('Invalid Password');
        else window.alert('Failed')
      }
    )
  }

  setUserInfo(event, key) {
    let obj = {};
    obj[key] = event.target.value;
    this.setState(obj);
  }

  render() {
    return (
      <div className="signInForm">
        <Form className="login-form">
          <div id="form-logo"><a href="/flagcamp/gofitness-web/">{'Welcome Back!'}</a></div>
          <Form.Item>
            <Input
              className="formInput"
              prefix={<Icon type="user" className="signInIcon" />}
              placeholder="Username"
              type="text" onChange={this.emailChange}
            />
          </Form.Item>
          <Form.Item>
            <Input
              className="formInput"
              prefix={<Icon type="lock" className="signInIcon" />}
              type="password" onChange={this.passwordChange}
              placeholder="Password"

            />
          </Form.Item>
          <Form.Item className="register-link">
            <Button type="submit" onClick={this.submit}
                    className="login-form-button">
              Log in
            </Button>

            <p> Or <Link to="/signup">register now!</Link> </p>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default withRouter(SignInForm);
