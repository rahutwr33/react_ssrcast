export const REGISTER_USER = 'register_user';
export const registerUser = (data) => async (dispatch, getState, api) => {

   const res = await api.post('signup',data);

  dispatch({
    type: REGISTER_USER,
    payload: res
  });
};


export const FETCH_CURRENT_USER = 'fetch_current_user';
export const fetchCurrentUser = (data) => async (dispatch, getState, api) => {
 const header = {
    'Accept': 'application/json',
    'Content-Type':'application/x-www-form-urlencoded',
    'Authorization':data
 }
  const res = await api.get('/current_user',header);

  dispatch({
    type: FETCH_CURRENT_USER,
    payload: res
  });
};

export const SIGNIN = 'signin';
export const signin = (data) => async (dispatch, getState, api) => {
  const res = await api.post('signin',data);
 
  dispatch({
    type: SIGNIN,
    payload: res
  });
};
