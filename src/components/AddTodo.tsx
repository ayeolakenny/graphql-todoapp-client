import { FC, useState } from "react";
import { addTodoMutation, getTodosQuery } from "../queries/queries";
import { useMutation } from "@apollo/client";

export const AddTodo: FC = () => {
  const [todo, setTodo] = useState<string>("");

  const [addTodo, { error: err }] = useMutation(addTodoMutation, {
    refetchQueries: [{ query: getTodosQuery }],
  });
  if (err) console.log(err);

  const handleSubmit = (e: any): void => {
    e.preventDefault();
    addTodo({ variables: { name: todo } });
    setTodo("");
  };

  return (
    <div className="form-section">
      <input
        type="text"
        value={todo}
        onChange={(e: any) => setTodo(e.target.value)}
      />
      <button onClick={handleSubmit}> Add Todo 😜</button>
    </div>
  );
};
