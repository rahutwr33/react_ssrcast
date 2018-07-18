import { META } from '../actions';

export default (state =null , action) => {
  switch (action.type) {
    case META:
      return action.payload;
    default:
      return state;
  }
};
