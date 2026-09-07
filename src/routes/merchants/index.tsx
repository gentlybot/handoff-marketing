import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { PageIntro } from "~/components/page-intro";
import { CtaBand } from "~/components/cta-band";
import { merchantDay, portalFeatures } from "~/data/site";

export default component$(() => {
  return (
    <>
      <PageIntro
        title="Delivery that runs on your schedule, not ours."
        lead="You set the pickup time and the cutoff. We price every stop by zone, build the routes, and put a courier at your counter when you said. Your customers see your name the whole way."
      >
        <Link href="/contact/" class="btn btn-primary">
          Request a merchant account
        </Link>
        <Link href="/pricing/" class="btn btn-secondary">
          See pricing
        </Link>
      </PageIntro>

      <section class="border-y border-mist bg-sheet">
        <div class="wrap py-16 sm:py-20">
          <div class="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 class="h-section">A day with Handoff</h2>
              <p class="mt-4 text-smoke">
                A typical same-day schedule for a shop in the core zone with a
                2:00 pm cutoff.
              </p>
            </div>
            <ol class="relative border-l-2 border-mist pl-8">
              {merchantDay.map((item) => (
                <li key={item.time} class="relative pb-8 last:pb-0">
                  <span
                    class="absolute -left-[2.45rem] top-1 size-4 rounded-full border-2 border-moss bg-sheet"
                    aria-hidden="true"
                  />
                  <p class="font-display text-sm font-semibold text-moss">
                    {item.time}
                  </p>
                  <h3 class="h-sub mt-1">{item.title}</h3>
                  <p class="measure mt-2 text-smoke">{item.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section class="wrap py-16 sm:py-20">
        <div class="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 class="h-section">The merchant portal</h2>
            <p class="mt-4 text-smoke">
              Everything about your deliveries in one place, for you and anyone
              on your team.
            </p>
          </div>
          <dl class="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {portalFeatures.map((item) => (
              <div key={item.title} class="border-t border-mist pt-4">
                <dt class="h-sub">{item.title}</dt>
                <dd class="mt-2 text-smoke">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <CtaBand
        headline="Send your first batch this week."
        body="Tell us where you are, when you want pickup, and roughly how many deliveries you do. We will have your account ready within a business day."
        primary={{ label: "Request a merchant account", href: "/contact/" }}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "For merchants",
  meta: [
    {
      name: "description",
      content:
        "How Handoff works for shops: upload orders, get zone pricing, a courier at your cutoff, tracking in your name, and one weekly invoice.",
    },
  ],
};
