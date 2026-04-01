import type { Route } from "./+types/classes";

import ramsLogo from "@/assets/rams-logo.jpeg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Classes | RAMS Computer Science" },
    {
      name: "description",
      content:
        "Class Resources for Mr. Perkin's Computer Science Class at Robert Adams Middle School.",
    },
  ];
}

export function ServerComponent() {
  return (
    <>
      <img src={ramsLogo} />
      <hgroup>
        <h1>Class Resources</h1>
      </hgroup>
    </>
  );
}
