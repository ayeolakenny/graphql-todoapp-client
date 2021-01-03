import { gql } from "@apollo/client";

const getTodosQuery = gql`
  {
    todos {
      name
      id
      isCompleted
    }
  }
`;

const addTodoMutation = gql`
  mutation($name: String!) {
    addTodo(name: $name) {
      name
      isCompleted
    }
  }
`;

const deleteTodoMutation = gql`
  mutation($id: ID!) {
    removeTodo(id: $id) {
      id
    }
  }
`;

export { getTodosQuery, deleteTodoMutation, addTodoMutation };
