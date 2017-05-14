import { timeAdjust, floatVoltage, loadCorrection } from 'dc-battery-testing';

export function calculate() {
  const references = Object.keys(this.refs);
  const input = this.refs


    //parses input values to numbers.
    function parsedVal(val) {
      return parseInt(input[references[val]].value);
    }

    //calculates if time-adjust method.
    if(references[0] === "adtHour") {
      const result = timeAdjust(
        [parsedVal(0), parsedVal(1), parsedVal(2)],
        [parsedVal(3), parsedVal(4), parsedVal(5)],
        parsedVal(6));

      this.setState({ result: result + '%' });
    }

    //calculates if float voltage.
    if(references[0] === "recVolts") {
      const result = floatVoltage(
        parsedVal(0),
        parsedVal(1),
        parsedVal(2)
      );

      this.setState({ result: result + ' VDC' });
    }

    //calculates if load correction
    if(references[0] === "standardTemp") {
      const result = loadCorrection(
        parsedVal(0),
        parsedVal(1),
        parsedVal(2)
      );

      this.setState({ result: result + ' Amps DC' });
    }

}
