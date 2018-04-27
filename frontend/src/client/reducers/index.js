import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import metaReducer from './metaReducer';
import blogReducer from './blogReducer';
import editblogReducer from './editblogReducer';
import addblogReducer from './addblogReducer';
import deleteblogReducer from './deleteblogReducer';

export default combineReducers({
  admin: userReducer,
  auth: authReducer,
  meta:metaReducer,
  blog:blogReducer,
  editblogreducer:editblogReducer,
  createblog:addblogReducer,
  deleteblogreducer:deleteblogReducer
});
