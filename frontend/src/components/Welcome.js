import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <h1 className="welcome-message">Welcome to <span className="name">BatteryApp!</span></h1>
      <p className="click-calculator">Click one of the calculators to get Started.</p>
      <img className="moving-arrow" src="../svgs/moving-arrow.svg" placeholder="moving-arrow" />
    </div>
  );
}

export default Welcome;
