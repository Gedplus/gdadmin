import { configureStore } from '@reduxjs/toolkit';

import authReducer from "../features/user/userSlice"
import productReducer from "../features/products/productSlice"
import blogReducer from  "../features/blogs/blogSlice"
import contactReducer from "../features/contact/contactSlice"
export const store = configureStore({
  reducer: {
  auth: authReducer,
blog : blogReducer,
  product: productReducer,
  contact :contactReducer ,
  },
});
