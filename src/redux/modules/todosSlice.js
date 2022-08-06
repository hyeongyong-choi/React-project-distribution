import { createSlice } from '@reduxjs/toolkit';

export const todosSlice = createSlice({
  name: 'todosSlice',
  initialState: {
    todos: [],
  },
  reducers: {},
});

export default todosSlice;
