import React, { Component } from 'react';

export default class TimeAdjust extends Component {
  render() {
    return (
      <div className="time-adjust">
        <form>

          {/*Actual Discharge Time*/}
          <label>Actual Discharge Time</label>
          <div className="discharge-times">
            <input className="time-and-temp-input" type="text" placeholder="Hrs" />
            <p className="time-colons">:</p>
            <input className="time-and-temp-input" type="text" placeholder="Min" />
            <p className="time-colons">:</p>
            <input className="time-and-temp-input" type="text" placeholder="Sec" />
          </div>

          {/*Rated Discharge Time*/}
          <label>Rated Discharge Time</label>
          <div className="discharge-times">
            <input className="time-and-temp-input" type="text" placeholder="Hrs" />
            <p className="time-colons">:</p>
            <input className="time-and-temp-input" type="text" placeholder="Min" />
            <p className="time-colons">:</p>
            <input className="time-and-temp-input" type="text" placeholder="Sec" />
          </div>

          {/*Temperature*/}
          <label>Temperature</label>
          <div className="single-inputs">
            <input className="time-and-temp-input" type="text" placeholder="°F" />
          </div>
        </form>
      </div>
    );
  }
}
