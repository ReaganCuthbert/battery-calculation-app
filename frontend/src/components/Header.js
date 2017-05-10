import React from 'react';
import { connect } from 'react-redux';

const Header = ({ heading }) => {

  const { headingTitle } = heading;

  return (
    <div className="header">
      <h1 className="calculation-name">{headingTitle}</h1>
      <div className="calculation-question">?</div>
    </div>
  );
}

//adds heading name to props object.
function mapStateToProps(state) {
  return { heading: state.heading };
}

export default connect(mapStateToProps)(Header);
