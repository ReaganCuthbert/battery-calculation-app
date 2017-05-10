import React from 'react';

const Header = ({ calculationName }) => {

  return (
    <div className="header">
      <h1 className="calculation-name">{calculationName}</h1>
      <div className="calculation-question">?</div>
    </div>
  );
}

export default Header;
