import type { Todo } from "./models";
import { json } from "@remix-run/node";
import type { ActionFunctionArgs } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import TodoList from "./components/TodoList";

const todos: Todo[] = [
  {
    id: 1,
    title: "Buy milk",
    completed: false,
  },
  {
    id: 2,
    title: "Walk the dog",
    completed: false,
  },
];

export const action = async ({ request }: ActionFunctionArgs) => {
  const body = await request.formData();
  todos.push({
    id: todos.length + 1,
    title: body.get("title")!.toString(),
    completed: false,
  });
  return todos;
};

export const loader = () => {
  return json(todos);
};

const Todos = () => {
  const todoList = useLoaderData<typeof loader>();
  return (
    <div>
      <TodoList todos={todoList} />
      <Form method="post">
        <input type="text" name="title" />
        <button type="submit">Create Todo</button>
      </Form>
    </div>
  );
};

export default Todos;
