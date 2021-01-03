import { FC, Fragment } from "react";
import { getTodosQuery, deleteTodoMutation } from "../queries/queries";
import { useQuery, useMutation } from "@apollo/client";

export const Todos: FC = () => {
  const { loading, error, data } = useQuery(getTodosQuery);

  const [removeTodo, { error: err }] = useMutation(deleteTodoMutation, {
    refetchQueries: [{ query: getTodosQuery }],
  });

  if (err) console.log(err);

  const deleteTodo = (todoid: string): void => {
    removeTodo({ variables: { id: todoid } });
  };

  const displayTodos = (): any => {
    if (loading) {
      return <p>Loading your todos...</p>;
    } else if (error) {
      return <p>SOmething went wrong, could not fetch your todos.</p>;
    } else {
      return data.todos.map((todo: any) => {
        return (
          <li className="list-item" key={todo.id} value={todo.id}>
            {todo.name}{" "}
            <button onClick={() => deleteTodo(todo.id)}>Completed 🎉</button>
          </li>
        );
      });
    }
  };

  return (
    <Fragment>
      <ul id="todo-list">{displayTodos()}</ul>
    </Fragment>
  );
};
