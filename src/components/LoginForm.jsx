import React, { Component } from "react";
import $ from "jquery";
import auth from "./auth"
import { withRouter } from 'react-router-dom';

class FormLog extends Component {


  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      logfail: ""
    };
  }

  handleChangeEmail = (event) => {
    const value = event.currentTarget.value;
    this.setState({ email: value });
  }

  handleChangePassword = (event) => {
    const value = event.currentTarget.value;
    this.setState({ password: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    var settings = {
      "url": "http://localhost:8080/login",
      "method": "POST",
      "timeout": 0,
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      "data": {
        "email": this.state.email,
        "password": this.state.password
      },
      success: (res) => {
        this.setState({ logfail: '', email: '', password: '' });
        auth.login()
        this.renderRedirect()
      },
      error: (res) => {
        this.setState({ logfail: "Votre email ou mot de passe est incorrect.", email: '', password: '' });
      }
    };
    $.ajax(settings);
  }

  renderRedirect = () => {
    this.props.history.push('/success')
  }

  render() {
    return <form className="form_container" onSubmit={this.handleSubmit}>
      <div className="failLog">
        <p>{this.state.logfail}</p>
      </div>
      <input onChange={this.handleChangeEmail} value={this.state.email} type="email" name="email" className="input_log" placeholder="Adresse email" id="email_input" />
      <br />
      <input onChange={this.handleChangePassword} value={this.state.password} type="password" name="password" className="input_log" placeholder="Mot de passe" id="password_input" />
      <br />
      <input type="submit" name="submit" id="submit_btn" value="Connexion" className="btn_submit" />
    </form>
  }
}

export default withRouter(FormLog);