
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

  const res = await api.get('/current_user');
 
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

export const LOGOUTUSER = 'logoutuser';
export const logoutuser = (data) => async (dispatch, getState, api) => {

  const res = await api.post('/logout',{cookies:data});
 
  dispatch({
    type: LOGOUTUSER,
    payload: res
  });
};

export const META = 'meta';
export const getmeta = (path) => async (dispatch, getState, api) => {

  const res = await api.get('/meta?path='+path);
 
  dispatch({
    type: META,
    payload: res.data
  });
};

export const ADDBLOG = 'addblog';
export const addblog = (data) => async (dispatch, getState, api) => {

 const res = await api.post('/addblog',data);
 
  dispatch({
    type: ADDBLOG,
    payload: res
  });
};
export const GETBLOG = 'getblog';
export const getblog = () => async (dispatch, getState, api) => {

 const res = await api.get('/getblog');
 
  dispatch({
    type: GETBLOG,
    payload: res
  });
};



