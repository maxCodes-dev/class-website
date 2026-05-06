import type { Route } from "./+types/classes";

// import ramsLogo from "@/assets/rams-logo.jpeg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Computer Club | RAMS Computer Science" },
    {
      name: "description",
      content: "Info about Computer Club at Robert Adams Middle School.",
    },
  ];
}

export function ServerComponent() {
  return (
    <>
      <section id="page-top">
        <hgroup>
          <h1>Computer Club</h1>
        </hgroup>
      </section>
      <p>Come join Computer Club! Computer Club meets on Wednesdays.</p>
    </>
  );
}
