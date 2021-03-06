import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeHeading } from '../../actions';
import { inputCheck } from '../extras/inputCheck';
import { inputRecalculate } from '../extras/inputRecalculate';

//Imported Components
import Result from '../extras/Result';

class Float extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };

    this.inputChange = this.inputChange.bind(this);
    this.leaveInput = this.leaveInput.bind(this);
  }

  //adds "Float Voltage" to heading.
  componentWillMount() {
    this.props.changeHeading("Temperature Correct Float Voltage");
  }

  inputChange(e) {
    inputCheck.call(this, e);
  }

  leaveInput() {
    inputRecalculate.call(this);
  }

  highlightVal(e) {
    e.target.value = '';
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
            <input onChange={this.inputChange} onFocus={this.highlightVal} onBlur={this.leaveInput} className="current-and-cells-input" ref="recVolts" type="number" placeholder="2.25 Volts" maxLength="4" />
          </div>

          {/*Published Discharge Current*/}
          <label>Number of Cells</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} onFocus={this.highlightVal} onBlur={this.leaveInput} className="current-and-cells-input" ref="cellNum" type="number" placeholder="60 Cells" maxLength="3" />
          </div>

          {/*Temperature*/}
          <label>Average Temperature</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} onFocus={this.highlightVal} onBlur={this.leaveInput} className="temp-input" ref="temp" type="number" placeholder="71°F" maxLength="3" />
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeHeading }, dispatch);
}

export default connect(null,mapDispatchToProps)(Float);
