import { createSlice } from '@reduxjs/toolkit';
import { coreAxios } from '../utils/axios';

const initialState = {
  userState: null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    getUser: (state, action) => {
      state.userState = action.payload;
    },
  },
})

export const getUserAsync = () => async (dispatch) => {
  coreAxios.get(`/api/user`)
  .then( response => {
    return dispatch(getUser(response.data));
  })
  .catch( error =>{
    console.log(error);
  });
};

// Action creators are generated for each case reducer function
export const { getUser } = userSlice.actions

export default userSlice.reducer