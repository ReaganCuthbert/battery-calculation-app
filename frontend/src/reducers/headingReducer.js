import { CHANGE_CALCULATOR_HEADING } from '../actions/index';


const initialState = { headingTitle: "Welcome"}

const headingReducer = function(state = initialState, action) {

  switch(action.type) {
    case CHANGE_CALCULATOR_HEADING:
      return Object.assign({}, state, { headingTitle: action.heading });
  }
  return state;
}

export default headingReducer;
