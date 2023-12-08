import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Mi App Remix" },
    { name: "description", content: "Mi primera app con Remix" },
  ];
};

export default function Index() {
  return <h1>Hola mundo desde Remix</h1>;
}
