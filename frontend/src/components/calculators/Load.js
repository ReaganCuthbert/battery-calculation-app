import React, { Component } from 'react';

export default class Load extends Component {
  render() {
    return (
      <div className="load">
        <form>

          {/*Standard Temperature*/}
          <label>Standard Temperature</label>
          <div className="single-inputs">
            <select className="standard-temp-dropdown">
              <option>77°F</option>
              <option>68°F</option>
            </select>
          </div>

          {/*Published Discharge Current*/}
          <label>Published Discharge Current</label>
          <div className="single-inputs">
            <input className="current-and-cells-input" type="text" placeholder="Amps" />
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
