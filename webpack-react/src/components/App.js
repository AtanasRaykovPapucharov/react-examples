import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    // state
    this.state = {
      name: ""
    };

    // this and function binding
    this.handleClick = this.handleClick.bind(this);
  }

  // event handler
  handleClick(event) {
    const target = event.target;
    const value = document.getElementsByClassName("input-name")[0].value || "Noname";

    // state setter
    this.setState({ name: value});
  }

  // hook
  componentDidMount() {

  }

  render() {
    return (
      <div id="wrapper">
        {/* // htmlFor !!! */}
        <label htmlFor="name">Name: </label>

        {/* // className !!! */}
        <input className="input-name" type="text" />

        {/* onClick event */}
        <button onClick={this.handleClick}>Go</button>

        <br />
        <hr />
        <br />

        <div className="welcome">{"Welcome, " + this.state.name}</div>

      </div>
    );
  }
}

export default App;