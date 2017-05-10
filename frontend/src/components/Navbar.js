import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">

      {/*Time-Adjust Navigation Button*/}
      <Link to="/time-adjust" className="nav-btn">
        <img src="../../svgs/Time-Adjust-Clock.svg" placeholder="clock symbol" className="clock-symbol" />
        <p className="nav-text">Time Adjust</p>
      </Link>

      {/*Load Correction Navigation Button*/}
      <Link to="/load" className="nav-btn">
        <img src="../../svgs/Load-Lightning-Bolt.svg" placeholder="lightning bolt" className="clock-symbol" />
        <p className="nav-text">Load</p>
      </Link>

      {/*Float Voltage Navigation Button*/}
      <Link to="/float" className="nav-btn">
        <img src="../../svgs/Float-Car-Battery.svg" placeholder="car battery" className="clock-symbol" />
        <p className="nav-text">Float</p>
      </Link>
    </div>
  );
}

export default Navbar;
