import type { Route } from "./+types/classes";

// import ramsLogo from "@/assets/rams-logo.jpeg";

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
      <section id="page-top">
        <hgroup>
          <h1>Classes</h1>
        </hgroup>
      </section>
    </>
  );
}
