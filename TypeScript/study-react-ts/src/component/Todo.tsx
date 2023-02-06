//Todo.tsx
import React from "react";
import TodoType from "../model/todo";
import TodoItem from "./TodoItem";

const Todo: React.FC<{ items: TodoType[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};
export default Todo;
