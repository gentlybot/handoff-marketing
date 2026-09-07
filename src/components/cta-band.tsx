import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";

type Props = {
  headline: string;
  body: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
};

export const CtaBand = component$<Props>((props) => {
  return (
    <section class="wrap py-16 sm:py-20">
      <div class="rounded-3xl bg-ink px-6 py-10 text-paper sm:px-12 sm:py-14">
        <div class="grid gap-8 md:grid-cols-[1.5fr_1fr] md:items-center">
          <div>
            <h2 class="h-section">{props.headline}</h2>
            <p class="mt-4 max-w-[38em] text-paper/75">{props.body}</p>
          </div>
          <div class="flex flex-wrap gap-3 md:justify-end">
            <Link
              href={props.primary.href}
              class="btn bg-marigold text-ink hover:bg-[#e6a628]"
            >
              {props.primary.label}
            </Link>
            {props.secondary && (
              <Link
                href={props.secondary.href}
                class="btn border-paper/40 text-paper hover:bg-paper hover:text-ink"
              >
                {props.secondary.label}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
});
