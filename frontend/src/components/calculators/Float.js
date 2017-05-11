import React, { Component } from 'react';

export default class Float extends Component {
  render() {
    return (
      <div className="float">
        <form>

          {/*Published Discharge Current*/}
          <label>Recommended Cell Voltage</label>
          <div className="single-inputs">
            <input className="current-and-cells-input" type="number" placeholder="Volts" maxlength="3" />
          </div>

          {/*Published Discharge Current*/}
          <label>Number of Cells</label>
          <div className="single-inputs">
            <input className="current-and-cells-input" type="number" placeholder="Cells" maxlength="3" />
          </div>

          {/*Temperature*/}
          <label>Average Temperature</label>
          <div className="single-inputs">
            <input className="time-and-temp-input" type="number" placeholder="°F" maxlength="3" />
          </div>
        </form>
      </div>
    );
  }
}
