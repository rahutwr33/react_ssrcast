import { ADDBLOG} from '../actions';

const initialState = {
  addblog: {}
};

export default function(state = null, action) {
 
  switch (action.type) {
    case ADDBLOG:
    console.log(">>>>>>>>>>>>>")
      return {
        addblog:action.payload.data
      }
    default:
      return state;
  }
}
