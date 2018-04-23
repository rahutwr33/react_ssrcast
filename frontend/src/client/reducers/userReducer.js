import { FETCH_ADMINS ,REGISTER_USER,SIGNIN,LOGOUTUSER} from '../actions';
import Cookies from 'universal-cookie';
const cookies = new Cookies();

export const initialState = {
   registeruser:null,
   loginuser:null,
   logout:null
};


export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ADMINS:
      return action.payload.data;
      case REGISTER_USER:
        return action.payload.data;
      case SIGNIN:
      if(action.payload.data.success==true){
        cookies.set('token', action.payload.data.token);
      }
       return action.payload.data;
      case LOGOUTUSER:
       return action.payload.data; 
    default:
      return state;
  }
};
