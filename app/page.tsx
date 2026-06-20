const services = [
  "Residential window cleaning",
  "Storefront and office glass",
  "Screen and track detailing",
  "Hard water stain removal",
];

const steps = [
  {
    title: "Walkthrough",
    description: "We inspect glass, screens, and hard-to-reach panes before work begins.",
  },
  {
    title: "Deep clean",
    description: "Frames, tracks, and edges are cleaned with careful attention to detail.",
  },
  {
    title: "Final polish",
    description: "We leave the glass streak-free and the property ready for guests or customers.",
  },
];

const windows = [
  {
    label: "Front entry",
    title: "Bright curb appeal",
    description: "Fresh glass, polished trim, and clean screens for the first impression.",
    panes: ["streak-free", "trim-washed", "screen-cleaned"],
  },
  {
    label: "Kitchen bay",
    title: "Natural light back",
    description: "Remove buildup, fingerprints, and dust from rooms used every day.",
    panes: ["inside and out", "detail edges", "safe ladder work"],
  },
  {
    label: "Storefront",
    title: "Client-ready glass",
    description: "Keep windows clear for foot traffic, branding, and a professional look.",
    panes: ["weekly service", "spot treatment", "quick turnaround"],
  },
];

const stats = [
  { value: "100%", label: "streak-free focus" },
  { value: "Same day", label: "quote response" },
  { value: "Local", label: "Sacramento service" },
];

const phoneNumber = "279-283-5795";
const phoneHref = "tel:2792835795";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.7),_transparent_36%),radial-gradient(circle_at_80%_20%,_rgba(145,199,255,0.28),_transparent_26%),linear-gradient(180deg,_#f7fbff_0%,_#edf5fb_46%,_#f9f5ef_100%)]" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-16 px-6 py-6 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between rounded-full border border-white/70 bg-white/70 px-5 py-3 shadow-[0_10px_40px_rgba(29,46,62,0.08)] backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-semibold tracking-[0.3em] text-white shadow-lg shadow-slate-950/20">
              MC
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-slate-500">
                Miller&apos;s Windows
              </p>
              <p className="text-sm text-slate-700">Sacramento window cleaning</p>
            </div>
          </div>

          <a
            href={phoneHref}
            className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            {phoneNumber}
          </a>
        </header>

        <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl">
            <p className="mb-4 inline-flex rounded-full border border-sky-200 bg-sky-50 px-4 py-2 text-sm font-medium text-sky-900">
              Window cleaning for homes, storefronts, and rentals
            </p>

            <h1 className="text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
              Windows that look
              <span className="block text-sky-700">clean from the curb</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-700 sm:text-xl">
              We clean glass, frames, tracks, and screens so the property feels brighter,
              looks maintained, and is ready for guests or customers.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href={phoneHref}
                className="inline-flex items-center justify-center rounded-full bg-sky-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-sky-200 transition hover:bg-sky-500"
              >
                Call For A Free Estimate
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-slate-400 hover:bg-slate-50"
              >
                See what we clean
              </a>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-3xl border border-white/80 bg-white/75 p-4 shadow-[0_16px_50px_rgba(29,46,62,0.08)] backdrop-blur"
                >
                  <p className="text-2xl font-semibold text-slate-950">{stat.value}</p>
                  <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-24 w-24 rounded-full bg-sky-300/25 blur-2xl" />
            <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-amber-200/40 blur-3xl" />

            <div className="grid gap-5 md:grid-cols-2">
              {windows.map((window, index) => (
                <article
                  key={window.label}
                  className={`rounded-[2rem] border border-white/80 bg-white/75 p-5 shadow-[0_20px_60px_rgba(29,46,62,0.14)] backdrop-blur ${
                    index === 0 ? "md:translate-y-8" : ""
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between">
                    <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-white">
                      {window.label}
                    </span>
                    <span className="text-xs font-medium text-slate-500">Before / after</span>
                  </div>

                  <div className="rounded-[1.75rem] border border-slate-200 bg-[linear-gradient(180deg,#fdfefe_0%,#dceefa_52%,#8cc4e9_100%)] p-3">
                    <div className="grid grid-cols-2 gap-3">
                      <div className="aspect-square rounded-[1.5rem] border border-white/70 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(255,255,255,0.15))] p-3 shadow-inner">
                        <div className="grid h-full grid-cols-2 gap-2">
                          <div className="rounded-xl border border-sky-200 bg-sky-50/80" />
                          <div className="rounded-xl border border-sky-200 bg-sky-50/80" />
                          <div className="rounded-xl border border-sky-200 bg-sky-50/80" />
                          <div className="rounded-xl border border-sky-200 bg-sky-50/80" />
                        </div>
                      </div>
                      <div className="aspect-square rounded-[1.5rem] border border-white/70 bg-[linear-gradient(145deg,#ffffff,rgba(255,255,255,0.2))] p-3 shadow-inner">
                        <div className="grid h-full grid-cols-2 gap-2">
                          <div className="rounded-xl border border-amber-100 bg-[linear-gradient(180deg,#fef6db,#fffaf0)]" />
                          <div className="rounded-xl border border-amber-100 bg-[linear-gradient(180deg,#fef6db,#fffaf0)]" />
                          <div className="rounded-xl border border-amber-100 bg-[linear-gradient(180deg,#fef6db,#fffaf0)]" />
                          <div className="rounded-xl border border-amber-100 bg-[linear-gradient(180deg,#fef6db,#fffaf0)]" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h2 className="mt-5 text-xl font-semibold text-slate-950">{window.title}</h2>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{window.description}</p>

                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {window.panes.map((pane) => (
                      <li key={pane} className="flex items-center gap-2">
                        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sky-100 text-xs font-bold text-sky-800">
                          ✓
                        </span>
                        {pane}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="services"
          className="grid gap-6 rounded-[2rem] border border-white/80 bg-white/75 p-6 shadow-[0_20px_60px_rgba(29,46,62,0.1)] backdrop-blur lg:grid-cols-[0.8fr_1.2fr]"
        >
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-700">
              Services
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-950">What we clean</h2>
            <p className="mt-4 text-slate-600">
              Residential and commercial service across Sacramento, with careful attention
              to glass, frames, tracks, and screens.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <div
                key={service}
                className="rounded-3xl border border-slate-200 bg-slate-50/80 p-4 text-slate-800"
              >
                {service}
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[1.75rem] border border-white/80 bg-white/80 p-6 shadow-[0_18px_45px_rgba(29,46,62,0.08)] backdrop-blur"
            >
              <p className="text-sm font-semibold text-sky-700">0{index + 1}</p>
              <h3 className="mt-3 text-xl font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
            </article>
          ))}
        </section>
      </section>
    </main>
  );
}
