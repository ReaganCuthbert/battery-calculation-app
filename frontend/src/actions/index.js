
//actions
export const CHANGE_CALCULATOR_HEADING = 'CHANGE_CALCULATOR_HEADING';

//action creator for app heading's title.
export function changeHeading(heading) {

  return {
    type: CHANGE_CALCULATOR_HEADING,
    heading
  };
}
