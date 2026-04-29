import type { Route } from "./+types/index";

// import ramsLogo from "@/assets/rams-logo.jpeg";

import "./index.css";

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
    <div id="home-page">
      <section id="page-top">
        <hgroup>
          <h1>Computer Science</h1>
          <p>Cole Perkins</p>
        </hgroup>
      </section>
      <p>
        Welcome to Mr. Perkins's Computer Science Class! At this website, you
        can find class resources and information.
      </p>
    </div>
  );
}
