import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <>
      <hgroup>
        <h1>Computer Science</h1>
        <p>Cole Perkins</p>
      </hgroup>
    </>
  );
}
