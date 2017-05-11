import React, { Component } from 'react';
import { inputCheck } from '../extras/inputCheck';

//Imported Components
import Result from '../extras/Result';

export default class TimeAdjust extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };

    this.inputChange = this.inputChange.bind(this);
  }

  inputChange(e) {

    inputCheck.call(this, e);
  }


  render() {
    return (
      <div className="time-adjust">

        {/*Results Display Here*/}
        <Result result={this.state.result} />

        <form>
          {/*Actual Discharge Time*/}
          <label>Actual Discharge Time</label>
          <div className="discharge-times">
            <input onChange={this.inputChange} ref="adtHour" className="time-and-temp-input" type="number" placeholder="Hrs" maxLength="2" min="0" max="24" />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} className="time-and-temp-input" ref="adtMin" type="number" placeholder="Min" min="0" max="59" maxLength="2" />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} className="time-and-temp-input" ref="adtSec" type="number" placeholder="Sec" min="0" max="59" maxLength="2" />
          </div>

          {/*Rated Discharge Time*/}
          <label>Rated Discharge Time</label>
          <div className="discharge-times">
            <input onChange={this.inputChange} className="time-and-temp-input" ref="rdtHour" type="number" placeholder="Hrs" maxLength="2"  />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} className="time-and-temp-input" ref="rdtMin" type="number" placeholder="Min" maxLength="2"  />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} className="time-and-temp-input" ref="rdtSec" type="number" placeholder="Sec" maxLength="2"  />
          </div>

          {/*Temperature*/}
          <label>Temperature</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} className="time-and-temp-input" ref="temp" type="number" placeholder="°F" maxLength="3"  />
          </div>
        </form>
      </div>
    );
  }
}
