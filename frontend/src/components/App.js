import React, { Component } from 'react';

//imported components
import Header from './Header';
import Navbar from './Navbar';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { calculation: "Time Adjustment Method" };

    this.changeCalculation = this.changeCalculation.bind(this);
  }

  changeCalculation(calculation) {
    this.setState({ calculation });
  }

  render() {
    return (
      <div>
        <Header calculationName={this.state.calculation} />
        <Navbar />
      </div>
    );
  }
}
