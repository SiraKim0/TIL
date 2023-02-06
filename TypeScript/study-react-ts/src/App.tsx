import Todo from "./component/Todo";
import TodoType from "./model/todo";

function App() {
  const todos = [new TodoType("Learn React"), new TodoType("Learn TypeScript")];
  return (
    <div>
      <Todo items={todos} />
    </div>
  );
}

export default App;
