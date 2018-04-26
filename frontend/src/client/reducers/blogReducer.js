import { ADDBLOG,GETBLOG } from '../actions';


export default function(state = null, action) {
  switch (action.type) {
    case ADDBLOG:
      return action.payload.data ;
    case GETBLOG:
     return action.payload.data ;
    default:
      return state;
  }
}
