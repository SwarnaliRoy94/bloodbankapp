import {configureStore} from '@reduxjs/toolkit';
import AuthReducer from '../features/Auth/AuthSlice';

export default configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
