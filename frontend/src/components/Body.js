import React, { Component } from 'react';
import { Route } from 'react-router-dom';

//imported components
import TimeAdjust from './calculators/TimeAdjust';
import Load from './calculators/Load';
import Float from './calculators/Float';
import Result from './extras/Result';

const Body = () => {
  return (
    <div className="body">
      
      {/*Results Display Here*/}
      <Result />

      <Route exact path="/time-adjust" component={TimeAdjust} />
      <Route exact path="/load" component={Load} />
      <Route exact path="/float" component={Float} />
    </div>
  );
}

export default Body;
