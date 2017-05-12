import { combineReducers } from 'redux';

//imported reducers
import headingReducer from './headingReducer';
import timeAdjustReducer from './timeAdjustReducer';

//reducers
const reducers = combineReducers({
  heading: headingReducer
});

export default reducers;
