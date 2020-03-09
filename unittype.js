import React, { Component } from "react";
import Typeunits from "./inputunit";

var APIcall = require("./unitConverCallAPI");

export default class unittype extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: "",
      typeunit: [],
      type: []
    };
  }
  getUnit = async event => {
    await this.setState({ unit: event.target.value });

    var unitObject1 = {
      type1: this.state.unit
    };
    APIcall.getunits(unitObject1).then(res => {
      this.setState({
        typeunit: res.data.data.units
      });
    });
  };

  componentWillMount() {
    APIcall.gettype().then(res => {
      this.setState({
        type: res.data.type
      });
    });
  }
  render() {
    const unitfield = this.state.type.map((value, key) => {
      return <option key={key}>{value}</option>;
    });
    return (
      <div>
        <select id="SelectUnit" value={this.state.key} onChange={this.getUnit}>
          <option value="N/A">Select Type </option>
          {unitfield}
        </select>
        <Typeunits typeunit={this.state.typeunit} unit={this.state.unit} />
      </div>
    );
  }
}
