export default function HomePage() {
  return (
    <main className="relative">
      <section className="relative isolate overflow-hidden px-6 py-xl sm:py-2xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="font-display text-step-4 sm:text-step-5 leading-tight tracking-tight"
            aria-label="Build. Ship. Scale."
          >
            <span className="sr-only">Build. Ship. Scale.</span>
            <span className="line block overflow-hidden">
              <span className="word inline-block">Build.</span>
            </span>
            <span className="line block overflow-hidden">
              <span className="word inline-block">Ship.</span>
            </span>
            <span className="line block overflow-hidden">
              <span className="word inline-block text-primary">Scale.</span>
            </span>
          </h1>
          <p className="mt-md text-step-0 text-muted">
            A minimal Next.js 14 + TypeScript + Tailwind starter with design tokens and variable fonts.
          </p>
          <div className="mt-lg flex items-center justify-center gap-sm">
            <a
              href="#"
              className="inline-flex items-center rounded-lg bg-primary px-lg py-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Get started
            </a>
            <a
              href="#"
              className="inline-flex items-center rounded-lg border border-border px-lg py-sm font-medium text-foreground transition hover:bg-muted/50 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
