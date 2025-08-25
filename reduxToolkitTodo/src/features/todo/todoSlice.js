import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: nanoid,
      text: "hellow world",
    },
  ],
};
//basically the reducers is the consist of the property and value in this addTodo is a property and its function may be declared at anywhre and outside also it can be use directly by importing them but in this we have to gave only reference not to call them (without openeing and the closed paranthesis)

//state give the current state of object and the action decide what and where the action iss being provided
export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo); // to activate the state
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
  },
});
//agian the slice is being update in two parts and it is a part of slice also lke functionality of reducer is being update bcs we are change the staet with the help of this reducer

export const { addTodo, removeTodo } = todoSlice.actions;

/// it takle the list of all reducer

export default todoSlice.reducer;
