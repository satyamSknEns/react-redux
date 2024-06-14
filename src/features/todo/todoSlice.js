import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.tasks.push({ id: Date.now(), text: action.payload, done: false });
    },
    deleteTodo: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
    editTodo: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.tasks.find((task) => task.id === id);
      if (task) {
        task.text = newText;
      }
    },
    toggleDone: (state, action) => {
      const task = state.tasks.find((task) => task.id === action.payload);
      console.log('toggle',task)
      if (task) {
        task.done = !task.done;
      }
    },
  },
});

export const { addTodo, deleteTodo, editTodo, toggleDone } = todoSlice.actions;

export default todoSlice.reducer;
