import {createSlice} from '@reduxjs/toolkit';

export const authenSlice = createSlice({
  name: 'authen',
  initialState: {
    isSigin: false,
  },
  reducers: {
    updateSiginStatus: (state, action) => {
      state.isSigin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {updateSiginStatus} = authenSlice.actions;

export default authenSlice.reducer;
