import { component$ } from "@builder.io/qwik";

export const Faq = component$<{
  items: { q: string; a: string }[];
  title?: string;
}>((props) => {
  return (
    <section class="wrap py-14 sm:py-16">
      <div class="grid gap-8 md:grid-cols-[1fr_2fr]">
        <h2 class="h-section">{props.title ?? "Questions"}</h2>
        <div class="divide-y divide-mist border-y border-mist">
          {props.items.map((item) => (
            <details key={item.q} class="group py-4">
              <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                <span>{item.q}</span>
                <span
                  class="grid size-8 shrink-0 place-items-center rounded-full border border-mist text-smoke transition-transform group-open:rotate-45"
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 16 16" class="size-3.5">
                    <path
                      d="M8 2v12M2 8h12"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                  </svg>
                </span>
              </summary>
              <p class="measure mt-3 text-smoke">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
});
