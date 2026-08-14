import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import portrait from "@/assets/portrait.jpg";
import rel1 from "@/assets/rel-1.jpg";
import rel2 from "@/assets/rel-2.jpg";
import rel3 from "@/assets/rel-3.jpg";
import rel4 from "@/assets/rel-4.jpg";
import rel5 from "@/assets/rel-5.jpg";
import rel6 from "@/assets/rel-6.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GOXXTI — Hard Techno Producer & Performer" },
      {
        name: "description",
        content:
          "GOXXTI: hard techno producer and performer. Latest track, tour dates, releases, press kit and direct booking.",
      },
      { property: "og:title", content: "GOXXTI — Hard Techno Producer & Performer" },
      {
        property: "og:description",
        content: "Latest track, tour dates, releases, press kit and direct booking.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const NAV = [
  ["01", "Track", "#track"],
  ["02", "Shows", "#shows"],
  ["03", "Press", "#press"],
  ["04", "Music", "#music"],
  ["05", "Booking", "#booking"],
] as const;

const SHOWS = [
  { date: "12.09.26", city: "Berlin, DE", venue: "Kraftwerk — Hall 2", tag: "NEXT UP", href: "#" },
  { date: "26.09.26", city: "Rotterdam, NL", venue: "Maassilo", tag: "SOLD OUT", href: null },
  { date: "10.10.26", city: "Warsaw, PL", venue: "Smolna", tag: null, href: "#" },
  { date: "31.10.26", city: "Barcelona, ES", venue: "Input High Fidelity", tag: null, href: "#" },
];

const RELEASES = [
  { img: rel1, title: "Null Protocol", meta: "EP · 2026" },
  { img: rel2, title: "Concrete Faith", meta: "Single · 2026" },
  { img: rel3, title: "Blackout Ritual", meta: "EP · 2025" },
  { img: rel4, title: "Laser Church", meta: "Single · 2025" },
  { img: rel5, title: "Distorted Kick VI", meta: "VA · 2025" },
  { img: rel6, title: "Chain / Signal", meta: "EP · 2024" },
];

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="label mb-8 flex items-center gap-4 text-muted-foreground">
      <span className="text-acid">{index}</span>
      <span>{children}</span>
      <span className="h-px flex-1 bg-border" />
    </div>
  );
}

function Index() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-5 py-4 md:px-10">
          <a href="#top" className="display text-xl tracking-tight md:text-2xl">
            GOXXTI
          </a>
          <nav className="hidden gap-8 md:flex">
            {NAV.map(([n, label, href]) => (
              <a
                key={href}
                href={href}
                className="label text-muted-foreground transition-colors hover:text-acid"
              >
                <span className="mr-2 text-acid/50">{n}</span>
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#booking"
            className="label border border-acid px-4 py-2 text-acid transition-colors hover:bg-acid hover:text-primary-foreground"
          >
            Book
          </a>
        </div>
      </header>

      {/* HERO */}
      <section
        id="top"
        className="grain scanlines relative flex min-h-screen flex-col justify-end overflow-hidden pb-10 pt-28"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 30%, color-mix(in oklab, var(--acid) 12%, transparent), transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-10">
          <div className="label mb-10 flex flex-wrap gap-x-10 gap-y-2 text-muted-foreground">
            <span>Est. 2019</span>
            <span>150—175 BPM</span>
            <span className="text-acid">Berlin / Worldwide</span>
          </div>
          <h1
            data-text="GOXXTI"
            className="glitch display w-full text-[22vw] leading-[0.8] md:text-[19vw]"
          >
            GOXXTI
          </h1>
          <div className="mt-8 flex flex-col gap-6 border-t border-border pt-6 md:flex-row md:items-end md:justify-between">
            <p className="display max-w-xl text-2xl leading-none md:text-4xl">
              Hard Techno
              <br />
              <span className="text-acid">Producer &amp; Performer</span>
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#track"
                className="label bg-acid px-6 py-4 text-primary-foreground transition-opacity hover:opacity-80"
              >
                Latest Track
              </a>
              <a
                href="#shows"
                className="label border border-border px-6 py-4 transition-colors hover:border-acid hover:text-acid"
              >
                Tour Dates
              </a>
            </div>
          </div>
          <div className="label mt-10 flex items-center gap-3 text-muted-foreground">
            <span className="inline-block h-8 w-px animate-pulse bg-acid" />
            Scroll
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="overflow-hidden border-y border-border bg-acid py-3">
        <div className="marquee-track flex w-max">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {Array.from({ length: 8 }).map((_, i) => (
                <span
                  key={i}
                  className="display px-6 text-xl text-primary-foreground md:text-2xl"
                >
                  New EP · Null Protocol · Out Now ·
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* LATEST TRACK */}
      <section id="track" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionLabel index="01">Latest Track</SectionLabel>
        <div className="grid gap-10 md:grid-cols-[1fr_1.2fr] md:gap-16">
          <div>
            <h2 className="display text-6xl md:text-8xl">
              Null
              <br />
              Protocol
            </h2>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Placeholder track description. Six minutes of distorted kick, industrial hats and a
              hook that doesn&apos;t ask permission. Mastered loud on purpose.
            </p>
            <div className="label mt-8 grid grid-cols-3 border-t border-border pt-4 text-muted-foreground">
              <span>172 BPM</span>
              <span>F Minor</span>
              <span className="text-acid">06:12</span>
            </div>
          </div>

          {/* Player mock */}
          <div className="grain scanlines relative border border-border bg-card p-5 md:p-8">
            <div className="label flex items-center justify-between text-muted-foreground">
              <span>Streaming Embed</span>
              <span className="text-acid">Placeholder</span>
            </div>
            <div className="mt-8 flex h-28 items-end gap-[3px] md:h-40">
              {Array.from({ length: 64 }).map((_, i) => (
                <span
                  key={i}
                  className="flex-1 origin-bottom bg-acid/70"
                  style={{
                    height: `${(18 + Math.abs(Math.sin(i * 1.7)) * 82).toFixed(1)}%`,
                    animationName: "bar",
                    animationTimingFunction: "ease-in-out",
                    animationIterationCount: "infinite",
                    animationDuration: `${(1 + (i % 7) * 0.18).toFixed(2)}s`,
                    animationDelay: `${(i * 0.03).toFixed(2)}s`,
                  }}
                />
              ))}
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-border pt-6">
              <button
                type="button"
                className="label flex items-center gap-3 bg-acid px-6 py-4 text-primary-foreground transition-opacity hover:opacity-80"
              >
                ▶ Play
              </button>
              <a
                href="#"
                className="label border border-border px-6 py-4 transition-colors hover:border-acid hover:text-acid"
              >
                SoundCloud
              </a>
              <a
                href="#"
                className="label border border-border px-6 py-4 transition-colors hover:border-acid hover:text-acid"
              >
                Spotify
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SHOWS */}
      <section id="shows" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <SectionLabel index="02">Upcoming Shows</SectionLabel>
          <h2 className="display mb-12 text-6xl md:text-8xl">On Tour</h2>
          <ul>
            {SHOWS.map((s) => (
              <li
                key={s.date}
                className="group grid grid-cols-1 items-center gap-3 border-t border-border py-6 last:border-b md:grid-cols-[160px_1fr_1fr_auto] md:gap-6"
              >
                <span className="label text-acid">{s.date}</span>
                <span className="display text-3xl md:text-4xl">{s.city}</span>
                <span className="text-sm text-muted-foreground">{s.venue}</span>
                <div className="flex items-center gap-4">
                  {s.tag && (
                    <span
                      className={`label border px-3 py-2 ${
                        s.tag === "SOLD OUT"
                          ? "border-border text-muted-foreground"
                          : "border-acid text-acid"
                      }`}
                    >
                      {s.tag}
                    </span>
                  )}
                  {s.href ? (
                    <a
                      href={s.href}
                      className="label border border-border px-5 py-3 transition-colors hover:border-acid hover:bg-acid hover:text-primary-foreground"
                    >
                      Tickets
                    </a>
                  ) : (
                    <span className="label px-5 py-3 text-muted-foreground/50">Unavailable</span>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRESS / EPK */}
      <section id="press" className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
        <SectionLabel index="03">Press / EPK</SectionLabel>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-16">
          <div className="grain scanlines relative overflow-hidden border border-border">
            <img
              src={portrait}
              alt="GOXXTI performing behind decks in a dark warehouse"
              width={1024}
              height={1280}
              loading="lazy"
              className="w-full grayscale contrast-125"
            />
          </div>
          <div>
            <h2 className="display text-6xl md:text-7xl">
              Biography
              <span className="text-acid">.</span>
            </h2>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              Placeholder bio. GOXXTI is a hard techno producer and performer working between
              industrial distortion and hypnotic repetition. Sets are built around raw kick design,
              relentless pacing and an unapologetic loudness that treats the dancefloor as a
              pressure chamber.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Placeholder paragraph two. Releases have landed on underground imprints across Europe,
              with residencies and festival appearances following a run of sold-out warehouse
              shows.
            </p>
            <div className="mt-12 grid grid-cols-3 border-t border-border">
              {[
                ["14", "Releases"],
                ["210+", "Shows Played"],
                ["2019", "Founded"],
              ].map(([n, l]) => (
                <div key={l} className="border-r border-border py-6 pr-4 last:border-r-0">
                  <div className="display text-4xl text-acid md:text-5xl">{n}</div>
                  <div className="label mt-3 text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
            <a
              href="#"
              className="label mt-10 inline-block border border-acid px-6 py-4 text-acid transition-colors hover:bg-acid hover:text-primary-foreground"
            >
              Download Press Kit (PDF)
            </a>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section id="music" className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <SectionLabel index="04">Music</SectionLabel>
          <h2 className="display mb-12 text-6xl md:text-8xl">Discography</h2>
          <div className="grid grid-cols-2 gap-px bg-border md:grid-cols-3">
            {RELEASES.map((r) => (
              <a
                key={r.title}
                href="#"
                className="group relative block bg-background p-3 transition-colors hover:bg-card md:p-5"
              >
                <div className="grain relative overflow-hidden">
                  <img
                    src={r.img}
                    alt={`${r.title} cover artwork`}
                    width={800}
                    height={800}
                    loading="lazy"
                    className="aspect-square w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                  />
                </div>
                <div className="mt-4 flex items-baseline justify-between gap-2">
                  <span className="display text-lg md:text-2xl">{r.title}</span>
                  <span className="label shrink-0 text-muted-foreground group-hover:text-acid">
                    ↗
                  </span>
                </div>
                <div className="label mt-2 text-muted-foreground">{r.meta}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING */}
      <section id="booking" className="border-t border-border bg-card/40">
        <div className="mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-32">
          <SectionLabel index="05">Booking</SectionLabel>
          <div className="grid gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <h2 className="display text-6xl md:text-8xl">
                Book
                <br />
                <span className="text-acid">GOXXTI</span>
              </h2>
              <p className="mt-8 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Clubs, festivals, warehouses. Send date, city, capacity and budget. Placeholder
                response time: 48 hours.
              </p>
              <div className="mt-10 border-t border-border pt-6">
                <div className="label text-muted-foreground">Direct</div>
                <a
                  href="mailto:booking@goxxti.com"
                  className="display mt-3 block break-all text-2xl text-acid md:text-3xl"
                >
                  booking@goxxti.com
                </a>
              </div>
            </div>

            <form
              className="grid gap-5"
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
            >
              <div className="grid gap-5 md:grid-cols-2">
                <Field label="Name" name="name" placeholder="Your name" />
                <Field label="Email" name="email" type="email" placeholder="you@promoter.com" />
              </div>
              <Field label="Event Details" name="event" placeholder="Date / city / venue / capacity" />
              <div>
                <label htmlFor="message" className="label mb-3 block text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us about the show"
                  className="w-full border border-border bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-acid focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="label bg-acid px-6 py-5 text-primary-foreground transition-opacity hover:opacity-80"
              >
                {sent ? "Request Sent" : "Send Booking Request"}
              </button>
              {sent && (
                <p className="label text-acid">
                  Demo form — no message was actually delivered.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border">
        <div className="mx-auto max-w-[1400px] px-5 py-12 md:px-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <span className="display text-4xl md:text-6xl">GOXXTI</span>
            <div className="flex flex-wrap gap-6">
              {["Instagram", "SoundCloud", "Bandcamp"].map((s) => (
                <a
                  key={s}
                  href="#"
                  className="label text-muted-foreground transition-colors hover:text-acid"
                >
                  {s}
                </a>
              ))}
            </div>
          </div>
          <div className="label mt-10 flex flex-col gap-2 border-t border-border pt-6 text-muted-foreground md:flex-row md:justify-between">
            <span>© 2026 GOXXTI</span>
            <span>Concept site — placeholder content</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="label mb-3 block text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full border border-border bg-background px-4 py-4 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-acid focus:outline-none"
      />
    </div>
  );
}
