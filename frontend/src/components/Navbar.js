import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeHeading } from '../actions';




const Navbar = ({ changeHeading }) => {

  function navClick(event) {
    if(this.to === '/time-adjust') changeHeading("Time Adjustment Method");

    if(this.to === '/load') changeHeading("Load Correction Method");

    if(this.to === '/float') changeHeading("Float Voltage");
  }

  return (
    <div className="navbar">

      {/*Time-Adjust Navigation Button*/}
      <NavLink onClick={navClick} activeClassName="selectedLink" to="/time-adjust" className="nav-btn">
        <img src="../../svgs/Time-Adjust-Clock.svg" placeholder="clock symbol" className="symbol" />
        <p className="nav-text">Time Adjust</p>
      </NavLink>

      {/*Load Correction Navigation Button*/}
      <NavLink onClick={navClick} activeClassName="selectedLink" to="/load" className="nav-btn">
        <img src="../../svgs/Load-Lightning-Bolt.svg" placeholder="lightning bolt" className="symbol" />
        <p className="nav-text">Load</p>
      </NavLink>

      {/*Float Voltage Navigation Button*/}
      <NavLink onClick={navClick} activeClassName="selectedLink" to="/float" className="nav-btn">
        <img src="../../svgs/Float-Car-Battery.svg" placeholder="car battery" className="symbol" />
        <p className="nav-text">Float</p>
      </NavLink>
    </div>
  );
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({ changeHeading }, dispatch);
}

export default connect(null,mapDispatchToProps, null, { pure: false })(Navbar);
