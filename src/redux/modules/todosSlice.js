import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
  todos: [],
  isLoding: false,
  error: null
}

export const __getTodos = createAsyncThunk(
  "todos/getTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/todos");
      // console.log(data.data);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __postTodos = createAsyncThunk(
  "todos/postTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post("http://localhost:3001/todos", payload);
      console.log(payload)
      console.log(data)
      console.log(data.data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __deleteTodos = createAsyncThunk(
  "todos/deleteTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.delete(`http://localhost:3001/todos/${payload}`);
      console.log(payload)
      return thunkAPI.fulfillWithValue(payload);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __updateTodos = createAsyncThunk(
  "todos/updateTodos",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.patch(`http://localhost:3001/todos/${payload.id}`,payload);
      console.log(payload)
      console.log(data)
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      // console.log(payload)
      return thunkAPI.rejectWithValue(error);
    }
  }
);



export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
  },
  extraReducers: {
    [__getTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },

    [__getTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log(state.todos)
      // console.log(action)
      // console.log(action.payload)
    },
    [__getTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__postTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },

    [__postTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log(state.todos)
      // console.log(action.payload)
      // console.log(state.todos)
      // console.log(action)
      // state.todos = state.todos.push(action.payload)
    },
    [__postTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__deleteTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
      
    },

    [__deleteTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.todos = action.payload; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      // console.log(state.todos)
      console.log(state.todos)
      console.log(action)
      state.todos = state.todos.filter(todo=> todo.id !== action.payload)
    },
    [__deleteTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },
    [__updateTodos.pending]: (state) => {
      state.isLoading = true; // 네트워크 요청이 시작되면 로딩상태를 true로 변경합니다.
    },

    [__updateTodos.fulfilled]: (state, action) => {
      state.isLoading = false; // 네트워크 요청이 끝났으니, false로 변경합니다.
      // state.todos = action.payload.updatetxt; // Store에 있는 todos에 서버에서 가져온 todos를 넣습니다.
      console.log(state.todos)
      console.log(action)
      state= action.payload.content
      
      // state.todos = action.payload.updatetxt
      // state.todos = action.payload
    },
    [__updateTodos.rejected]: (state, action) => {
      state.isLoading = false; // 에러가 발생했지만, 네트워크 요청이 끝났으니, false로 변경합니다.
      state.error = action.payload; // catch 된 error 객체를 state.error에 넣습니다.
    },

  },
});

export const {} = todosSlice.actions;
export default todosSlice


// export const __postTodos = createAsyncThunk(
//   "todos/postTodos",
//   async (payload,thunkAPI) => {
//     try{
//       const data = await axios.post()
//     }
//   }
// )




