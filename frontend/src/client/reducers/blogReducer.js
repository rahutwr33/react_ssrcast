import {GETBLOG } from '../actions';

const initialState = {
  getblog:{}
};

export default function(state = null, action) {
  
  switch (action.type) {
    case GETBLOG:
     return {
      getblog:action.payload.data
     }; 
    default:
      return state;
  }
}
