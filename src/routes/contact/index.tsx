import { component$ } from "@builder.io/qwik";
import {
  Form,
  Link,
  routeAction$,
  useLocation,
  z,
  zod$,
  type DocumentHead,
} from "@builder.io/qwik-city";
import { PageIntro } from "~/components/page-intro";
import { contactTopics, contactVolumes, site } from "~/data/site";

export const useContactAction = routeAction$(
  async (data) => {
    // No mail service is wired up on purpose. The request is logged on the
    // server so it shows up in the app's output during a demo.
    console.log("[contact] new request", JSON.stringify(data));
    return { ok: true, topic: data.topic };
  },
  zod$({
    topic: z.enum(["merchant", "courier", "other"]),
    name: z.string().trim().min(2, "Enter your name."),
    business: z.string().trim().optional(),
    email: z.string().trim().email("Enter an email address we can reply to."),
    volume: z.string().optional(),
    message: z
      .string()
      .trim()
      .min(10, "Tell us a little more, at least a sentence."),
  }),
);

export default component$(() => {
  const action = useContactAction();
  const loc = useLocation();
  const initialTopic = loc.url.searchParams.get("topic") ?? "merchant";
  const errors = action.value?.failed ? action.value.fieldErrors : undefined;

  return (
    <>
      <PageIntro
        title="Tell us what you deliver."
        lead="Shops hear back within one business day with a per-stop price and a setup time. Couriers hear back within two days with next steps."
      />

      <section class="wrap grid gap-12 pb-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
        <div>
          {action.value?.ok ? (
            <div class="sheet p-8" role="status">
              <h2 class="h-section">Thanks, we have your request.</h2>
              <p class="mt-4 text-smoke">
                {action.value.topic === "courier"
                  ? "Someone from the courier team will email you within two business days with the application steps."
                  : "Someone from Crosstown will email you within one business day with a per-stop price and a setup time."}
              </p>
              <Link href="/" class="link mt-6 inline-block">
                Back to the home page
              </Link>
            </div>
          ) : (
            <Form action={action} class="space-y-6">
              <div>
                <label for="topic" class="field-label">
                  What brings you here
                </label>
                <select
                  id="topic"
                  name="topic"
                  class="field"
                  value={initialTopic}
                >
                  {contactTopics.map((t) => (
                    <option
                      key={t.value}
                      value={t.value}
                      selected={t.value === initialTopic}
                    >
                      {t.label}
                    </option>
                  ))}
                </select>
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                <div>
                  <label for="name" class="field-label">
                    Your name
                  </label>
                  <input
                    id="name"
                    name="name"
                    class="field"
                    autocomplete="name"
                    required
                  />
                  {errors?.name && <p class="field-error">{errors.name}</p>}
                </div>
                <div>
                  <label for="business" class="field-label">
                    Business name
                    <span class="font-normal text-smoke">
                      {" "}
                      (if you have one)
                    </span>
                  </label>
                  <input
                    id="business"
                    name="business"
                    class="field"
                    autocomplete="organization"
                  />
                </div>
              </div>

              <div class="grid gap-6 sm:grid-cols-2">
                <div>
                  <label for="email" class="field-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    class="field"
                    autocomplete="email"
                    required
                  />
                  {errors?.email && <p class="field-error">{errors.email}</p>}
                </div>
                <div>
                  <label for="volume" class="field-label">
                    Deliveries a week
                  </label>
                  <select id="volume" name="volume" class="field">
                    <option value="">Not sure yet</option>
                    {contactVolumes.map((v) => (
                      <option key={v.value} value={v.value}>
                        {v.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label for="message" class="field-label">
                  What you deliver, and where
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  class="field"
                  placeholder="Flowers from Queen West, mostly downtown and the east end, about 80 a week."
                  required
                />
                {errors?.message && <p class="field-error">{errors.message}</p>}
              </div>

              <div class="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  class="btn btn-primary"
                  disabled={action.isRunning}
                >
                  {action.isRunning ? "Sending" : "Send request"}
                </button>
                <p class="text-sm text-smoke">
                  We reply by email. No mailing lists.
                </p>
              </div>
            </Form>
          )}
        </div>

        <aside class="space-y-8">
          <div>
            <h2 class="h-sub">Prefer email?</h2>
            <p class="mt-2 text-smoke">
              Shops:{" "}
              <a href={`mailto:${site.email}`} class="link">
                {site.email}
              </a>
            </p>
            <p class="mt-1 text-smoke">
              Couriers:{" "}
              <a href={`mailto:${site.courierEmail}`} class="link">
                {site.courierEmail}
              </a>
            </p>
          </div>
          <div>
            <h2 class="h-sub">Phone</h2>
            <p class="mt-2 text-smoke">{site.phone}, weekdays 9 to 6.</p>
          </div>
          <div>
            <h2 class="h-sub">Where we are</h2>
            <p class="mt-2 text-smoke">
              {site.region}. Deliveries across the city and the near suburbs.
            </p>
          </div>
        </aside>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Contact",
  meta: [
    {
      name: "description",
      content:
        "Request a Crosstown merchant account or apply to drive. We reply within one business day.",
    },
  ],
};
