import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { RouteSheet } from "~/components/route-sheet";
import { CtaBand } from "~/components/cta-band";
import { Faq } from "~/components/faq";
import {
  courierBand,
  hero,
  homeFaqs,
  included,
  pricingTeaser,
  site,
  steps,
  zones,
} from "~/data/site";

export default component$(() => {
  return (
    <>
      <section class="wrap grid gap-12 pb-16 pt-12 sm:pt-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:pb-24 lg:pt-20">
        <div>
          <h1 class="h-display max-w-[14ch]">{hero.headline}</h1>
          <p class="lead mt-6">{hero.body}</p>
          <div class="mt-8 flex flex-wrap gap-3">
            <Link href={hero.primary.href} class="btn btn-primary">
              {hero.primary.label}
            </Link>
            <Link href={hero.secondary.href} class="btn btn-secondary">
              {hero.secondary.label}
            </Link>
          </div>
          <p class="mt-6 max-w-[34em] text-sm text-smoke">{hero.audience}</p>
        </div>
        <div class="mx-auto w-full max-w-md lg:max-w-none">
          <RouteSheet />
        </div>
      </section>

      <section class="border-y border-mist bg-sheet">
        <div class="wrap py-16 sm:py-20">
          <div class="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 class="h-section">How a delivery day works</h2>
              <p class="mt-4 text-smoke">
                From the moment orders arrive to the photo at the door, one path
                with no surprises.
              </p>
            </div>
            <ol class="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {steps.map((step, i) => (
                <li key={step.title} class="flex gap-4">
                  <span class="grid size-9 shrink-0 place-items-center rounded-full bg-moss font-display text-sm font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 class="h-sub">{step.title}</h3>
                    <p class="mt-2 text-smoke">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section class="wrap py-16 sm:py-20">
        <div class="grid gap-10 lg:grid-cols-[1fr_2fr]">
          <div>
            <h2 class="h-section">What every merchant gets</h2>
            <p class="mt-4 text-smoke">
              The pieces that make delivery a thing you stop thinking about.
            </p>
          </div>
          <dl class="grid gap-x-10 gap-y-7 sm:grid-cols-2">
            {included.map((item) => (
              <div key={item.title} class="border-t border-mist pt-4">
                <dt class="h-sub">{item.title}</dt>
                <dd class="mt-2 text-smoke">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section class="wrap pb-16 sm:pb-20">
        <div class="grid gap-8 rounded-3xl bg-mist/50 px-6 py-10 sm:px-10 md:grid-cols-[1.4fr_1fr] md:items-center">
          <div>
            <h2 class="h-section">{courierBand.headline}</h2>
            <p class="mt-4 max-w-[38em] text-smoke">{courierBand.body}</p>
          </div>
          <div class="md:text-right">
            <Link href={courierBand.cta.href} class="btn btn-secondary">
              {courierBand.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <section class="border-y border-mist bg-sheet">
        <div class="wrap py-16 sm:py-20">
          <div class="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <h2 class="h-section">Where we deliver</h2>
              <p class="mt-4 text-smoke">
                All of {site.city} and the near suburbs, grouped into four
                zones. Your service area page shows the exact postal prefixes.
              </p>
            </div>
            <div class="overflow-x-auto">
              <table class="w-full min-w-[36rem] text-left">
                <thead>
                  <tr class="border-b border-mist text-sm text-smoke">
                    <th scope="col" class="py-3 pr-4 font-medium">
                      Zone
                    </th>
                    <th scope="col" class="py-3 pr-4 font-medium">
                      Covers
                    </th>
                    <th scope="col" class="py-3 pr-4 font-medium">
                      Service
                    </th>
                    <th scope="col" class="py-3 font-medium">
                      Cutoff
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {zones.map((zone) => (
                    <tr key={zone.name} class="border-b border-mist align-top">
                      <th scope="row" class="py-3.5 pr-4 font-semibold">
                        {zone.name}
                      </th>
                      <td class="py-3.5 pr-4 text-smoke">{zone.areas}</td>
                      <td class="py-3.5 pr-4">{zone.service}</td>
                      <td class="py-3.5">{zone.cutoff}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <section class="wrap py-16 sm:py-20">
        <div class="grid gap-8 md:grid-cols-[1.4fr_1fr] md:items-end">
          <div>
            <h2 class="h-section">{pricingTeaser.headline}</h2>
            <p class="mt-4 max-w-[38em] text-smoke">{pricingTeaser.body}</p>
          </div>
          <div class="md:text-right">
            <Link href={pricingTeaser.cta.href} class="link text-lg">
              {pricingTeaser.cta.label}
            </Link>
          </div>
        </div>
      </section>

      <Faq items={homeFaqs} title="Common questions" />

      <CtaBand
        headline="Ready to send your first batch?"
        body="Request an account and we will set up your pickup address, cutoff, and zones within a business day."
        primary={{ label: "Request a merchant account", href: "/contact/" }}
        secondary={{ label: "Drive with Handoff", href: "/couriers/" }}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "",
  meta: [
    {
      name: "description",
      content:
        "Same-day and next-day local delivery for shops in Toronto. Zone pricing, routes built for your cutoff, tracking in your name, and a photo at every door.",
    },
  ],
};
