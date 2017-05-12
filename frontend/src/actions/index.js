
//actions
export const CHANGE_CALCULATOR_HEADING = 'CHANGE_CALCULATOR_HEADING';
export const GET_TIME_ADJUST_RESULT = 'GET_TIME_ADJUST_RESULT';
export const GET_LOAD_RESULT = 'GET_LOAD_RESULT';
export const GET_FLOAT_RESULT = 'GET_FLOAT_RESULT';

//action creator for app heading's title.
export function changeHeading(heading) {
  return {
    type: CHANGE_CALCULATOR_HEADING,
    heading
  };
}

//Time-Adjust result to display.
export function getTimeAdjust(result) {
  return {
    type: GET_TIME_ADJUST_RESULT,
    result
  }
}

//Load result to display.
export function getLoad(result) {
  return {
    type: GET_LOAD_RESULT,
    result
  }
}

//Float result to display.
export function getFloat(result) {
  return {
    type: GET_FLOAT_RESULT,
    result
  }
}
