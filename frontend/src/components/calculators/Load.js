import React, { Component } from 'react';

//Imported Components
import Result from '../extras/Result';

export default class Load extends Component {
  constructor(props) {
    super(props);

    this.state = { result: '' };
  }
  render() {
    return (
      <div className="load">

        {/*Results Display Here*/}
        <Result result={this.state.result} />

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
            <input className="current-and-cells-input" type="number" placeholder="Amps" maxlength="3" />
          </div>

          {/*Temperature*/}
          <label>Temperature</label>
          <div className="single-inputs">
            <input className="time-and-temp-input" type="number" placeholder="°F" maxlength="3" />
          </div>
        </form>
      </div>
    );
  }
}
