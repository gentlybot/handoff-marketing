import { component$ } from "@builder.io/qwik";

/** The Crosstown door tag. A hanger tag with a hole, stamped with a check. */
export const BrandMark = component$<{ class?: string }>((props) => {
  return (
    <svg
      viewBox="0 0 32 40"
      class={props.class}
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M9 2h14a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H9a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6Z"
        fill="#f2b640"
        stroke="#17271f"
        stroke-width="2"
      />
      <circle
        cx="16"
        cy="9.5"
        r="2.6"
        fill="#f5f6f2"
        stroke="#17271f"
        stroke-width="2"
      />
      <path
        d="m10.5 24.5 4 4 7.5-9"
        fill="none"
        stroke="#17271f"
        stroke-width="2.6"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
});
