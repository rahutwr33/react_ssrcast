import { DELETE_BLOG } from '../actions';

const initialState = {
  deleteblog:{}
};

export default function(state = null, action) {
  
  switch (action.type) {
     case DELETE_BLOG:
     return {
      deleteblog:action.payload.data
     }; 
    default:
      return state;
  }
}
