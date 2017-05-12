import { calculate } from './calculate';

export function inputRecalculate() {
  const references = Object.keys(this.refs);

  //checks to see which input boxes have values
  const refsWithValues = references.filter(ref => this.refs[ref].value);

  //if all input boxes have values, calculate
  if(references.length === refsWithValues.length) calculate.call(this);

}
