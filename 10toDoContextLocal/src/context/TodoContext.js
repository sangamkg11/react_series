import { createContext, useContext } from "react";
//creating and exporting the context
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "react complete",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  togleTodo: (id) => {},
});

//now creating  and esxporting the hooks with the name of useTodo

//whenever we are using the useContext then we have to give a context ffor its reference
export const useToDo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
