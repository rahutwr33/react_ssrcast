import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import metaReducer from './metaReducer';

export default combineReducers({
  admin: userReducer,
  auth: authReducer,
  meta:metaReducer
});
