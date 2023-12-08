import type { ActionFunctionArgs } from "@remix-run/node";
import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
// import { createTodo } from "../../../controllers/todosController";

export async function action({ request }: ActionFunctionArgs) {
  const body = await request.formData();
  console.log(body);
  return redirect("/");
  //   const todo = await createTodo({
  //     title: body.get("title"),
  //   });
  //   return redirect(`/todos/${todo.id}`);
}

export default function Todos() {
  return (
    <Form method="post">
      <input type="text" name="title" />
      <button type="submit">Create Todo</button>
    </Form>
  );
}
