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
          {/*Rated Discharge Time*/}
          <label>Rated Discharge Time</label>
          <div className="discharge-times">
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-input" ref="rdtHour" type="number" placeholder="Hrs" maxLength="2"  />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-input" ref="rdtMin" type="number" placeholder="Min" maxLength="2"  />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-input" ref="rdtSec" type="number" placeholder="Sec" maxLength="2"  />
          </div>

          {/*Actual Discharge Time*/}
          <label>Actual Discharge Time</label>
          <div className="discharge-times">
            <input onChange={this.inputChange} onBlur={this.leaveInput} ref="adtHour" className="time-input" type="number" placeholder="Hrs" maxLength="2" min="0" max="24" />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-input" ref="adtMin" type="number" placeholder="Min" min="0" max="59" maxLength="2" />
            <p className="time-colons">:</p>
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-input" ref="adtSec" type="number" placeholder="Sec" min="0" max="59" maxLength="2" />
          </div>


          {/*Temperature*/}
          <label>Average Temperature</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="temp-input" ref="temp" type="number" placeholder="71°F" maxLength="3"  />
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
