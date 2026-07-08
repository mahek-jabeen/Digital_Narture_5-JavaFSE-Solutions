import React, { Component } from "react";
import CurrencyConvertor from "./CurrencyConvertor";
import "./App.css";

class App extends Component {

  constructor() {
    super();

    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1
    });

    this.sayHello();
  }

  decrement() {
    this.setState({
      count: this.state.count - 1
    });
  }

  sayHello() {
    alert("Hello! Member");
  }

  sayWelcome(message) {
    alert(message);
  }

  syntheticEvent() {
    alert("I was clicked");
  }

  render() {

    return (

      <div className="App">

        <h1>React Event Handling</h1>

        <h2>Counter : {this.state.count}</h2>

        <button onClick={this.increment}>
          Increment
        </button>

        <button onClick={this.decrement}>
          Decrement
        </button>

        <br /><br />

        <button
          onClick={() => this.sayWelcome("Welcome")}
        >
          Say Welcome
        </button>

        <br /><br />

        <button
          onClick={this.syntheticEvent}
        >
          OnPress
        </button>

        <hr />

        <CurrencyConvertor />

      </div>

    );

  }

}

export default App;