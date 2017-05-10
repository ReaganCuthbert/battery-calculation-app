import React, { Component } from 'react';

//imported components
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { calculation: "Welcome" };

    this.changeCalculation = this.changeCalculation.bind(this);
  }

  changeCalculation(calculation) {
    this.setState({ calculation });
  }

  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Navbar />
      </div>
    );
  }
}
