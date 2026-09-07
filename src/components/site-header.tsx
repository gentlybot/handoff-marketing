import { component$, useSignal } from "@builder.io/qwik";
import { Link, useLocation } from "@builder.io/qwik-city";
import { BrandMark } from "./brand-mark";
import { nav, site } from "~/data/site";

export const SiteHeader = component$(() => {
  const open = useSignal(false);
  const loc = useLocation();

  return (
    <header class="sticky top-0 z-40 border-b border-mist bg-paper/90 backdrop-blur">
      <a
        href="#main"
        class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        Skip to content
      </a>
      <div class="wrap flex h-16 items-center justify-between gap-6">
        <Link
          href="/"
          class="flex items-center gap-2.5 font-display text-xl font-bold tracking-tight"
          onClick$={() => (open.value = false)}
        >
          <BrandMark class="h-7 w-auto" />
          <span>{site.name}</span>
        </Link>

        <nav aria-label="Primary" class="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = loc.url.pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                class={{
                  "text-[0.95rem] font-medium transition-colors hover:text-moss": true,
                  "text-moss underline decoration-2 underline-offset-[0.45em]":
                    active,
                }}
                aria-current={active ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div class="hidden md:block">
          <Link href="/contact/" class="btn btn-primary">
            Request an account
          </Link>
        </div>

        <button
          type="button"
          class="inline-flex size-10 items-center justify-center rounded-full border border-mist md:hidden"
          aria-expanded={open.value}
          aria-controls="mobile-nav"
          aria-label={open.value ? "Close menu" : "Open menu"}
          onClick$={() => (open.value = !open.value)}
        >
          <svg viewBox="0 0 24 24" class="size-5" aria-hidden="true">
            {open.value ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open.value && (
        <div id="mobile-nav" class="border-t border-mist bg-paper md:hidden">
          <nav aria-label="Primary" class="wrap flex flex-col gap-1 py-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                class="rounded-lg px-3 py-3 text-lg font-medium hover:bg-mist/60"
                onClick$={() => (open.value = false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact/"
              class="btn btn-primary mt-2 justify-center"
              onClick$={() => (open.value = false)}
            >
              Request an account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
});
