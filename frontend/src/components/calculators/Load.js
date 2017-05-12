import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeHeading } from '../../actions';
import { inputCheck } from '../extras/inputCheck';
import { inputRecalculate } from '../extras/inputRecalculate';

//Imported Components
import Result from '../extras/Result';

class Load extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };

    this.inputChange = this.inputChange.bind(this);
    this.leaveInput = this.leaveInput.bind(this);
  }

  //adds "Load Correction" to heading.
  componentWillMount() {
    this.props.changeHeading("Load Correction");
  }


  inputChange(e) {
    inputCheck.call(this, e);
  }

  leaveInput() {
    inputRecalculate.call(this);
  }

  render() {
    return (
      <div className="load">

        {/*Results Display Here*/}
        <Result result={this.state.result} />

        <form>
          {/*Standard Temperature*/}
          <label>Standard Temperature</label>
          <div className="standard-temp-dropdown">
            <select ref="standardTemp">
              <option value="77">&nbsp;&nbsp;77°F</option>
              <option value="68">&nbsp;&nbsp;68°F</option>
            </select>
          </div>

          {/*Published Discharge Current*/}
          <label>Published Discharge Current</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="current-and-cells-input" ref="current" type="number" placeholder="Amps" maxLength="3" />
          </div>

          {/*Temperature*/}
          <label>Temperature</label>
          <div className="single-inputs">
            <input onChange={this.inputChange} onBlur={this.leaveInput} className="time-and-temp-input" ref="temp" type="number" placeholder="°F" maxLength="3" />
          </div>
        </form>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeHeading }, dispatch);
}

export default connect(null,mapDispatchToProps)(Load);
