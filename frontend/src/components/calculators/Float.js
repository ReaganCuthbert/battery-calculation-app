import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeHeading } from '../../actions';
import { inputCheck } from '../extras/inputCheck';

//Imported Components
import Result from '../extras/Result';

class Float extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };

    this.inputChange = this.inputChange.bind(this);
  }

  //adds "Float Voltage" to heading.
  componentWillMount() {
    this.props.changeHeading("Float Voltage");
  }

  inputChange(e) {

    inputCheck.call(this, e);
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
            <input onChange={this.inputChange} className="current-and-cells-input" ref="recVolts" type="number" placeholder="Volts" maxLength="4" />
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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ changeHeading }, dispatch);
}

export default connect(null,mapDispatchToProps)(Float);
