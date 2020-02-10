import React, { Component } from "react";

class SuccessLog extends Component {

  render() {
    return <div className="container">
      <h2>Vous êtes maintenant connecté <span role='img'>🚀</span></h2>
      <img className="gif" src="./gif/minions.gif" alt="gif des minions"></img>
    </div>
  }
}

export default SuccessLog;