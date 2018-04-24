import { META } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case META:
      return action.payload.data;
    default:
      return state;
  }
};
