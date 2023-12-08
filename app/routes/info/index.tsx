import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export async function loader() {
  // Aquí se crea toda la información para obtener datos
  return json({ name: "Gorka", date: new Date() });
}

export default function Info() {
  const data = useLoaderData<typeof loader>();
  console.log(data);
  return <h1>Hola: {data.name} desde Info</h1>;
}
