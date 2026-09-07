import { component$, Slot } from "@builder.io/qwik";

export const PageIntro = component$<{ title: string; lead: string }>(
  (props) => {
    return (
      <section class="wrap pb-10 pt-14 sm:pt-20">
        <h1 class="h-display max-w-[16ch]">{props.title}</h1>
        <p class="lead mt-6">{props.lead}</p>
        <div class="mt-8 flex flex-wrap gap-3 empty:hidden">
          <Slot />
        </div>
      </section>
    );
  },
);
