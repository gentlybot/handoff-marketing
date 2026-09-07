import { component$ } from "@builder.io/qwik";
import {
  Link,
  type DocumentHead,
  type RequestHandler,
} from "@builder.io/qwik-city";

/**
 * Catch-all for unknown paths. Qwik City only serves `404.tsx` from a built
 * adapter, so this route renders the not-found page in dev and prod alike and
 * sets the status code itself.
 */
export const onRequest: RequestHandler = ({ status }) => {
  status(404);
};

export default component$(() => {
  return (
    <section class="wrap py-24 sm:py-32">
      <p class="font-display text-sm font-semibold text-moss">404</p>
      <h1 class="h-display mt-3 max-w-[14ch]">
        That address is not on the route.
      </h1>
      <p class="lead mt-6">
        The page you asked for does not exist or has moved. Try the home page,
        or tell us what you were looking for.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <Link href="/" class="btn btn-primary">
          Go to the home page
        </Link>
        <Link href="/contact/" class="btn btn-secondary">
          Contact us
        </Link>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Page not found",
};
