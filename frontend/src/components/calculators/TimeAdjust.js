import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeHeading } from '../../actions';
import { inputCheck } from '../extras/inputCheck';
import { inputRecalculate } from '../extras/inputRecalculate';

//Imported Components
import Result from '../extras/Result';

class TimeAdjust extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };

    this.inputChange = this.inputChange.bind(this);
    this.leaveInput = this.leaveInput.bind(this);
  }

  //adds "Time Adjustment Method" to heading.
  componentWillMount() {
    this.props.changeHeading("Time Adjustment Method");
  }

  inputChange(e) {
    inputCheck.call(this, e);
  }

  leaveInput() {
    inputRecalculate.call(this);
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
            <input onChange={this.inputChange} onBlur={this.leaveInput} ref="adtHour" className="time-and-temp-input" type="number" placeholder="Hrs" maxLength="2" min="0" max="24" />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-and-temp-input" ref="adtMin" type="number" placeholder="Min" min="0" max="59" maxLength="2" />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-and-temp-input" ref="adtSec" type="number" placeholder="Sec" min="0" max="59" maxLength="2" />
          </div>

          {/*Rated Discharge Time*/}
          <label>Rated Discharge Time</label>
          <div className="discharge-times">
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-and-temp-input" ref="rdtHour" type="number" placeholder="Hrs" maxLength="2"  />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-and-temp-input" ref="rdtMin" type="number" placeholder="Min" maxLength="2"  />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-and-temp-input" ref="rdtSec" type="number" placeholder="Sec" maxLength="2"  />
          </div>

          {/*Temperature*/}
          <label>Temperature</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-and-temp-input" ref="temp" type="number" placeholder="°F" maxLength="3"  />
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeHeading }, dispatch);
}

export default connect(null,mapDispatchToProps)(TimeAdjust);
