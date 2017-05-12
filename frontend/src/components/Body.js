import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//imported components
import Welcome from './Welcome';
import TimeAdjust from './calculators/TimeAdjust';
import Load from './calculators/Load';
import Float from './calculators/Float';

const Body = () => {
  return (
    <div className="body">
      <Route exact path="/" component={Welcome} />
      <Route exact path="/time-adjust" component={TimeAdjust} />
      <Route exact path="/load" component={Load} />
      <Route exact path="/float" component={Float} />
    </div>
  );
}

export default Body;
