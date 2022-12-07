import {createSlice} from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'authen',
  initialState: {
    isSigin: false,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.isSigin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {increment, decrement, incrementByAmount} = appSlice.actions;

export default appSlice.reducer;
