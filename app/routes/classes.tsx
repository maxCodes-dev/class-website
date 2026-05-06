import type { Route } from "./+types/classes";

import classes from "@/../mock/classes";

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
  const eighthAssignments = classes["8th"].assignments.map((assignment) => (
    <li>{assignment.name}</li>
  ));
  return (
    <>
      <section id="page-top">
        <hgroup>
          <h1>Classes</h1>
        </hgroup>
      </section>
      <h2>8th Grade</h2>
      <h3>Assignments</h3>
      <ol>{eighthAssignments}</ol>
    </>
  );
}
