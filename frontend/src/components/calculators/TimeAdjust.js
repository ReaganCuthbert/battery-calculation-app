import React, { Component } from 'react';

//Imported Components
import Result from '../extras/Result';

export default class TimeAdjust extends Component {
  constructor(props) {
    super(props);

    this.inputChange = this.inputChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  inputChange(e) {
    const references = Object.keys(this.refs);

    for(let i = 0; i < references.length; i++) {
      let inputBox = this.refs[references[i]], nextInput = this.refs[references[i + 1]];

      //runs if correct inputBox.
      if(inputBox === e.target) {

        //removes inputted number if it's greater than expected length.
        if(inputBox.value.length > inputBox.maxLength) {
          inputBox.value = inputBox.value.substring(0, inputBox.value.length -1);
        }

        //runs if Input Box's length is the same as its requested maxlength.
        if(inputBox.value.length === inputBox.maxLength) {

          //runs if an input box comes after currently focused input box.
          if(nextInput) {
            nextInput.focus();
            break;
          }

          this.calculate();
          break;
        }
      }
    }
  }

  calculate() {
    const references = Object.keys(this.refs);

    //checks to see which input boxes have values
    const refsWithValues = references.filter(ref => this.refs[ref].value);

    if(references.length === refsWithValues.length) console.log("let's calculate");

    else console.log('all input boxes must have values');
  }

  render() {
    return (
      <div className="time-adjust">

        {/*Results Display Here*/}
        <Result />

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
