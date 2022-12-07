import {configureStore} from '@reduxjs/toolkit';
import appSlice from './slices';
import authenSlice from './slices/authenSlice';

export default configureStore({
  reducer: {
    authen: authenSlice,
    app: appSlice,
  },
});
