import { timeAdjust } from 'dc-battery-testing';

export function calculate() {
  const references = Object.keys(this.refs);
  const input = this.refs

  //checks to see which input boxes have values
  const refsWithValues = references.filter(ref => this.refs[ref].value);

  //if all boxes have values, calculate.
  if(references.length === refsWithValues.length) {

    //calculates if time-adjust method.
    if(references[0] === "adtHour") {
      const result = timeAdjust([input[references[0]].value, input[references[1]].value, input[references[2]].value],
      [input[references[3]].value, input[references[4]].value, input[references[5]].value],
      input[references[6]].value);

      this.setState({ result });
    }

    
  }

  else console.log('all input boxes must have values');
}
