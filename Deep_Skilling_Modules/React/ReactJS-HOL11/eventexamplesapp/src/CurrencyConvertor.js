import React, { Component } from "react";

class CurrencyConvertor extends Component {

  constructor() {

    super();

    this.state = {

      rupees: "",

      euro: ""

    };

  }

  handleSubmit = (event) => {

    event.preventDefault();

    const euroValue = (this.state.rupees / 90).toFixed(2);

    this.setState({

      euro: euroValue

    });

  };

  render() {

    return (

      <div>

        <h2>Currency Convertor</h2>

        <form onSubmit={this.handleSubmit}>

          <label>

            Indian Rupees :

          </label>

          <input

            type="number"

            value={this.state.rupees}

            onChange={(e) =>
              this.setState({
                rupees: e.target.value
              })
            }

          />

          <br /><br />

          <label>

            Euro :

          </label>

          <input

            type="text"

            value={this.state.euro}

            readOnly

          />

          <br /><br />

          <button type="submit">

            Convert

          </button>

        </form>

      </div>

    );

  }

}

export default CurrencyConvertor;