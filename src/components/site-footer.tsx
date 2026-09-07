import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { BrandMark } from "./brand-mark";
import { nav, site } from "~/data/site";

export const SiteFooter = component$(() => {
  const year = new Date().getFullYear();
  return (
    <footer class="border-t border-mist">
      <div class="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link
            href="/"
            class="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight"
          >
            <BrandMark class="h-7 w-auto" />
            <span>{site.name}</span>
          </Link>
          <p class="measure mt-4 text-smoke">
            Same-day and next-day delivery for local shops in {site.city}.
            Routes built for your cutoff, couriers who live nearby, and proof at
            every door.
          </p>
        </div>
        <div>
          <p class="h-sub">Explore</p>
          <ul class="mt-4 space-y-2.5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} class="hover:text-moss">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p class="h-sub">Reach us</p>
          <ul class="mt-4 space-y-2.5">
            <li>
              <a href={`mailto:${site.email}`} class="hover:text-moss">
                {site.email}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.courierEmail}`} class="hover:text-moss">
                {site.courierEmail}
              </a>
            </li>
            <li>{site.phone}</li>
            <li class="text-smoke">{site.region}</li>
          </ul>
        </div>
      </div>
      <div class="wrap flex flex-col gap-2 border-t border-mist py-6 text-sm text-smoke sm:flex-row sm:justify-between">
        <p>
          {year} {site.name}. Sample company for product demos.
        </p>
        <p>Deliveries run seven days a week, weather permitting.</p>
      </div>
    </footer>
  );
});
