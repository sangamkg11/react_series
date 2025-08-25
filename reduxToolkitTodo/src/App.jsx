import "./App.css";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

function App() {
  return (
    <>
      <h1>this is the demo page for the redux toolkit demonstration</h1>
      <AddTodo />
      <Todos />
    </>
  );
}

export default App;
