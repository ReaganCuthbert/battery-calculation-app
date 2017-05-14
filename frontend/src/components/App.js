import React, { Component } from 'react';

//imported components
import Header from './Header';
import Navbar from './Navbar';
import Body from './Body';
import Modal from 'react-modal';

//modalStyles
const modalStyles = {
  width: '100%',
  height: '100%'
}


export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = { modalToggle: false };

    //if screen orientation is landscape, return modal.
    window.addEventListener("resize", () => {
      if(screen.orientation.type === "landscape-primary") this.setState({ modalToggle: true });
      else this.setState({ modalToggle: false });
    });

  }

  //if screen orientation is landscape, return modal.
  componentWillMount() {
    if(screen.orientation.type === "landscape-primary")
      this.setState({ modalToggle: true });
  }


  render() {
    return (
      <div className="container">
        <Header />
        <Body />
        <Navbar />
        <Modal isOpen={this.state.modalToggle} style={modalStyles} contentLabel="Orientation Check">
          <h1>Hello World!</h1>
        </Modal>
      </div>
    );
  }
}
