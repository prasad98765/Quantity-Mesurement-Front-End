import React, { Component } from "react";
require("./unittype");
var APIcall = require("./unitConverCallAPI");

class secoundInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: props.unit,
      firstUnit: "Enter Value",
      secoundUnit: "Enter Value",
      value: 0,
      result: 0,
      unitsss: []
    };
  }
  componentWillReceiveProps(props) {
    this.setState({ type: props.unit });
    this.setState({ unitsss: props.typeunit });
  }

  getfirstUnit = event => {
    this.setState({ firstUnit: event.target.value });
  };

  getsecoundUnit = async event => {
    await this.setState({ secoundUnit: event.target.value });

    var unitObject = {
      type1: this.state.type,
      firstUnit: this.state.firstUnit,
      secoundUnit: this.state.secoundUnit,
      value: this.state.value
    };
    APIcall.getValueConverted(unitObject).then(res => {
      console.log(res.data.data);

      this.setState({ result: res.data.data });
    });
  };

  getValue = async event => {
    await this.setState({ value: event.target.value });
  };

  render() {
    const unitfield = this.state.unitsss.map((value, key) => {
      return <option key={key}>{value}</option>;
    });
    return (
      <div>
        <div>
          <label id="userInput"> Enter Value :</label>
          <input
            value={this.state.value}
            onChange={this.getValue}
            pattern="[0-9]"
            title="Enther Only Numeric Value"
            type={Number}
            id="output"
          />

          <select
            id="firstUnit"
            value={this.state.firstUnit}
            onChange={this.getfirstUnit}
          >
            <option value="N/A">Select Unit </option>
            {unitfield}
          </select>
        </div>
        <div>
          <label id="userInput"> Enter Value :</label>
          <input
            value={this.state.value}
            onChange={this.getValue}
            pattern="[0-9]"
            title="Enther Only Numeric Value"
            type={Number}
            id="output"
            value={this.state.result}
          />
          <select
            id="secoundUnit"
            value={this.state.secoundUnit}
            onChange={this.getsecoundUnit}
          >
            <option value="N/A">Select Unit </option>
            {unitfield}
          </select>
        </div>
      </div>
    );
  }
}

export default secoundInput;
