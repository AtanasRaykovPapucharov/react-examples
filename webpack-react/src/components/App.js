import React, { Component } from "react";
import { Requester } from "../services/Requester";

const URL = "https://api.punkapi.com/v2/beers";

class App extends Component {
  constructor() {
    super();

    // state
    this.state = {
      name: "",
      beers: []
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
    // GET Request
    Requester()
      .getAll(URL)
      .then((data) => {
        console.log(data)
        this.setState({ beers: data});
      });

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

        <br />
        <hr />
        <br />

        {
          this.state.beers.map((beer, i) => {
            return <article key={i}>
              <img src={beer.image_url} alt="img" width="60px"/>
              <span>{beer.name}</span>
            </article>
          })
        }

      </div>
    );
  }
}

export default App;