import { component$ } from "@builder.io/qwik";
import { BrandMark } from "./brand-mark";
import { sampleRoute } from "~/data/site";

/**
 * A printed-manifest view of one live route. The progress line grows once on
 * load and the arrival chip appears at the current stop. That is the only
 * unprompted motion on the site.
 */
export const RouteSheet = component$(() => {
  const route = sampleRoute;
  return (
    <div
      class="sheet relative p-5 sm:p-6"
      aria-label={`${route.number}, live progress`}
    >
      <div class="flex items-start justify-between gap-4">
        <div>
          <p class="font-display text-lg font-semibold leading-tight">
            {route.number}
          </p>
          <p class="text-sm text-smoke">{route.day}</p>
        </div>
        <BrandMark class="h-8 w-auto" />
      </div>

      <div class="mt-4 rounded-xl bg-paper px-3.5 py-2.5 text-sm">
        <span class="font-semibold">Pickup</span>{" "}
        <span>
          {route.pickup.name}, {route.pickup.address}
        </span>
      </div>

      <div class="relative mt-5">
        <div class="route-line" aria-hidden="true">
          <div class="route-progress" />
        </div>
        <ol class="relative space-y-3.5">
          {route.stops.map((stop, i) => (
            <li key={stop.name} class="flex items-start gap-3.5">
              <span
                class={{
                  "relative z-10 grid size-[2.1rem] shrink-0 place-items-center rounded-full border-2 font-display text-sm font-bold": true,
                  "border-moss bg-moss text-white": !!stop.done,
                  "border-marigold bg-marigold text-ink": !!stop.current,
                  "border-mist bg-sheet text-smoke":
                    !stop.done && !stop.current,
                }}
              >
                {i + 1}
              </span>
              <div class="min-w-0 flex-1 pt-1">
                <div class="flex items-baseline justify-between gap-3">
                  <p class="truncate font-semibold">{stop.name}</p>
                  {stop.current ? (
                    <span class="route-chip shrink-0 rounded-full bg-marigold px-2.5 py-0.5 text-xs font-semibold">
                      {stop.status}
                    </span>
                  ) : (
                    <p
                      class={{
                        "shrink-0 text-xs": true,
                        "text-moss": !!stop.done,
                        "text-smoke": !stop.done,
                      }}
                    >
                      {stop.status}
                    </p>
                  )}
                </div>
                <p class="text-sm text-smoke">{stop.address}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>

      <hr class="rule my-4" />
      <p class="text-sm text-smoke">{route.summary}</p>
    </div>
  );
});
