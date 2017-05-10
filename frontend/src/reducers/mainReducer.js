import { combineReducers } from 'redux';

//imported reducers
import headingReducer from './headingReducer';

//reducers
const reducers = combineReducers({
  heading: headingReducer
});

export default reducers;
