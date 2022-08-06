import { configureStore } from '@reduxjs/toolkit';
import todosSlice from './modules/todosSlice';

const store = configureStore({
  reducer: {
    todos: todosSlice.reducer,
  },
});

export default store;
