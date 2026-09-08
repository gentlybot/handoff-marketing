import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import { PageIntro } from "~/components/page-intro";
import { CtaBand } from "~/components/cta-band";
import { Faq } from "~/components/faq";
import { pricingExtras, pricingFaqs, volumeRates, zones } from "~/data/site";

export default component$(() => {
  return (
    <>
      <PageIntro
        title="One price per stop, set by zone."
        lead="No surge, no distance math, no monthly fee. Every stop on your invoice shows its zone and its price, so the number you see before pickup is the number you pay."
      >
        <Link href="/contact/" class="btn btn-primary">
          Request a merchant account
        </Link>
      </PageIntro>

      <section class="border-y border-mist bg-sheet">
        <div class="wrap py-16 sm:py-20">
          <h2 class="h-section">Price per stop</h2>
          <div class="mt-8 overflow-x-auto">
            <table class="w-full min-w-[40rem] text-left">
              <thead>
                <tr class="border-b border-mist text-sm text-smoke">
                  <th scope="col" class="py-3 pr-4 font-medium">
                    Zone
                  </th>
                  <th scope="col" class="py-3 pr-4 font-medium">
                    Covers
                  </th>
                  <th scope="col" class="py-3 pr-4 font-medium">
                    Same day
                  </th>
                  <th scope="col" class="py-3 pr-4 font-medium">
                    Next day
                  </th>
                  <th scope="col" class="py-3 font-medium">
                    Cutoff
                  </th>
                </tr>
              </thead>
              <tbody>
                {zones.map((zone) => (
                  <tr key={zone.name} class="border-b border-mist align-top">
                    <th scope="row" class="py-4 pr-4 font-semibold">
                      {zone.name}
                    </th>
                    <td class="py-4 pr-4 text-smoke">{zone.areas}</td>
                    <td class="py-4 pr-4 font-display text-xl font-semibold tabular-nums">
                      {zone.sameDay}
                    </td>
                    <td class="py-4 pr-4 font-display text-xl font-semibold tabular-nums">
                      {zone.nextDay}
                    </td>
                    <td class="py-4">{zone.cutoff}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p class="mt-4 text-sm text-smoke">
            Prices are per stop, before tax. A stop is one address, regardless
            of how many orders go there.
          </p>
        </div>
      </section>

      <section class="wrap grid gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 class="h-section">Volume rates</h2>
          <dl class="mt-6 divide-y divide-mist border-y border-mist">
            {volumeRates.map((row) => (
              <div key={row.threshold} class="flex justify-between gap-6 py-4">
                <dt>{row.threshold}</dt>
                <dd class="shrink-0 font-semibold">{row.rate}</dd>
              </div>
            ))}
          </dl>
          <p class="mt-4 text-sm text-smoke">
            Volume is measured on the previous four weeks and applied
            automatically.
          </p>
        </div>
        <div>
          <h2 class="h-section">Extras</h2>
          <dl class="mt-6 divide-y divide-mist border-y border-mist">
            {pricingExtras.map((row) => (
              <div key={row.item} class="flex justify-between gap-6 py-4">
                <dt>{row.item}</dt>
                <dd class="shrink-0 font-semibold">{row.price}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <Faq items={pricingFaqs} title="Billing questions" />

      <CtaBand
        headline="Want a quote for your volume?"
        body="Tell us roughly how many deliveries you do each week and where they go. We will send back a per-stop price the same day."
        primary={{ label: "Request a quote", href: "/contact/" }}
      />
    </>
  );
});

export const head: DocumentHead = {
  title: "Pricing",
  meta: [
    {
      name: "description",
      content:
        "Crosstown pricing: one price per stop by zone, from $7.50 in the Toronto core. Volume rates above 200 stops a week. No monthly fee.",
    },
  ],
};
