import { component$, Slot } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { SiteHeader } from "~/components/site-header";
import { SiteFooter } from "~/components/site-footer";
import { site } from "~/data/site";

export default component$(() => {
  return (
    <>
      <SiteHeader />
      <main id="main">
        <Slot />
      </main>
      <SiteFooter />
    </>
  );
});

export const head: DocumentHead = ({ head }) => {
  const title = head.title
    ? `${head.title} | ${site.name}`
    : `${site.name}: ${site.tagline}`;
  return {
    ...head,
    title,
    meta: [
      ...head.meta,
      { property: "og:title", content: title },
      { property: "og:site_name", content: site.name },
      { name: "theme-color", content: "#f5f6f2" },
    ],
  };
};
