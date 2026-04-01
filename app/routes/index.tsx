import type { Route } from "./+types/index";

import ramsLogo from "@/assets/rams-logo.jpeg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home | RAMS Computer Science" },
    {
      name: "description",
      content:
        "Homepage for Mr. Perkin's Computer Science Class at Robert Adams Middle School.",
    },
  ];
}

export function ServerComponent() {
  return (
    <>
      <img src={ramsLogo} />
      <hgroup>
        <h1>Computer Science</h1>
        <p>Cole Perkins</p>
      </hgroup>
      <p>
        Welcome to Mr. Perkins's Computer Science Class! At this website, you
        can find class resources and information.
      </p>
    </>
  );
}
