import { GET_SINGLE_BLOG } from '../actions';

const initialState = {
  getSingleblog:{}

};

export default function(state = null, action) {
  
  switch (action.type) {
    case GET_SINGLE_BLOG:
     return {
      editblog:action.payload.data
     }; 
    default:
      return state;
  }
}
