import React, { Component } from 'react';

//imported components
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';
import Modal from 'react-modal';



export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { modalToggle: false };

    //if screen orientation is landscape, return modal.
    window.addEventListener("orientationchange", () => {
      if(screen.width > screen.height) this.setState({ modalToggle: true });
      else this.setState({ modalToggle: false });
    })

  }

  //if screen orientation is landscape, return modal.
  componentWillMount() {
    if(screen.width > screen.height)
      this.setState({ modalToggle: true });
  }


  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Navbar />
        <Modal isOpen={this.state.modalToggle} className="modal" contentLabel="Orientation Check">
          <p className="orientation-warning">BatteryApp is a mobile web app.</p>
          <p className="orientation-warning orientation-command">Please switch over to a phone or tablet in portrait view.</p>
        </Modal>
      </div>
    );
  }
}
