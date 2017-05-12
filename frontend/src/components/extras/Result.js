import React from 'react';

const Result = ({ result }) => {
  if(!result) return <div className="result">Results</div>;

  else return <div className="result answer">{result}</div>;
}

export default Result;
