import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { PageIntro } from "~/components/page-intro";
import { CtaBand } from "~/components/cta-band";
import { Faq } from "~/components/faq";
import {
  courierFaqs,
  courierHow,
  courierRequirements,
  samplePay,
} from "~/data/site";

export default component$(() => {
  return (
    <>
      <PageIntro
        title="Drive routes near home. See the pay before you say yes."
        lead="Crosstown offers routes to couriers who live nearby. Every offer shows the pickup, the stops, the distance, and the pay. Take the ones that fit your day and get paid every Friday."
      >
        <Link href="/contact/?topic=courier" class="btn btn-primary">
          Apply to drive
        </Link>
      </PageIntro>

      <section class="border-y border-mist bg-sheet">
        <div class="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div>
            <h2 class="h-section">How driving works</h2>
            <ol class="mt-8 space-y-7">
              {courierHow.map((step, i) => (
                <li key={step.title} class="flex gap-4">
                  <span class="grid size-9 shrink-0 place-items-center rounded-full bg-moss font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 class="h-sub">{step.title}</h3>
                    <p class="measure mt-2 text-smoke">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div class="mx-auto w-full max-w-sm lg:mx-0 lg:max-w-none">
            <div class="sheet p-6">
              <p class="font-display text-lg font-semibold">
                {samplePay.title}
              </p>
              <dl class="mt-4 divide-y divide-mist">
                {samplePay.lines.map((line) => (
                  <div
                    key={line.label}
                    class="flex justify-between gap-4 py-2.5 text-[0.95rem]"
                  >
                    <dt class="text-smoke">{line.label}</dt>
                    <dd class="font-medium tabular-nums">{line.amount}</dd>
                  </div>
                ))}
                <div class="flex justify-between gap-4 pt-3 text-lg font-semibold">
                  <dt>{samplePay.total.label}</dt>
                  <dd class="tabular-nums">{samplePay.total.amount}</dd>
                </div>
              </dl>
              <p class="mt-4 text-sm text-smoke">{samplePay.note}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="wrap py-16 sm:py-20">
        <div class="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 class="h-section">What you need</h2>
            <p class="mt-4 text-smoke">
              Five things. If you have them, you can usually start driving
              within a week of applying.
            </p>
          </div>
          <ul class="grid gap-3 sm:grid-cols-2">
            {courierRequirements.map((req) => (
              <li
                key={req}
                class="flex gap-3 rounded-2xl border border-mist bg-sheet p-4"
              >
                <svg
                  viewBox="0 0 20 20"
                  class="mt-0.5 size-5 shrink-0 text-moss"
                  aria-hidden="true"
                >
                  <path
                    d="m4 10.5 4 4 8-9"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2.2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Faq items={courierFaqs} title="Courier questions" />

      <CtaBand
        headline="Apply in ten minutes."
        body="Tell us where you live and when you can drive. We arrange the background check and walk you through the app before your first route."
        primary={{ label: "Apply to drive", href: "/contact/?topic=courier" }}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Drive with Crosstown",
  meta: [
    {
      name: "description",
      content:
        "Drive delivery routes near home with the pay shown up front. Accept the routes that fit your day and get paid every Friday.",
    },
  ],
};
