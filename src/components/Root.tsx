import { FC } from "react";
import { AddTodo } from "./AddTodo";
import { Todos } from "./Todos";

export const Root: FC = () => {
  return (
    <div id="main">
      <h1>These are your uncompleted todos...🤕</h1>
      <Todos />
      <AddTodo />
    </div>
  );
};
