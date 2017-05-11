import React, { Component } from 'react';
import { inputCheck } from '../extras/inputCheck';

//Imported Components
import Result from '../extras/Result';

export default class Float extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };

    this.inputChange = this.inputChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  inputChange(e) {

    inputCheck.call(this, e);
  }

  calculate() {
    console.log('it works!');
  }

  render() {
    return (
      <div className="float">

        {/*Results Display Here*/}
        <Result result={this.state.result} />

        <form>
          {/*Published Discharge Current*/}
          <label>Recommended Cell Voltage</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} className="current-and-cells-input" ref="recVolts" type="number" placeholder="Volts" maxLength="3" />
          </div>

          {/*Published Discharge Current*/}
          <label>Number of Cells</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} className="current-and-cells-input" ref="cellNum" type="number" placeholder="Cells" maxLength="3" />
          </div>

          {/*Temperature*/}
          <label>Average Temperature</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} className="time-and-temp-input" ref="temp" type="number" placeholder="°F" maxLength="3" />
          </div>
        </form>
      </div>
    );
  }
}
