import type { Todo } from "../models";

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
