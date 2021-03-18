import { combineReducers } from 'redux';
import siteDataReducer from './siteData/siteDataReducer';

const rootReducer = combineReducers({
  siteData: siteDataReducer,
});

export default rootReducer;
