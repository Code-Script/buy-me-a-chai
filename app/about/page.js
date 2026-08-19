import Link from "next/link";

const values = [
  { title: "Made for meaningful support", description: "Every chai is a small gesture that tells a creator their work matters—and gives them room to keep going." },
  { title: "Simple by design", description: "Set up your page, share it with your community, and let supporters send encouragement in just a few clicks." },
  { title: "Community first", description: "Buy Me a Chai brings creators and their biggest supporters closer through personal messages and shared momentum." },
];

export default function About() {
  return (
    <main className="container mx-auto max-w-5xl px-6 py-14 text-white md:py-24">
      <section className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">About Buy Me a Chai</p>
        <h1 className="text-4xl font-black leading-tight md:text-6xl">
          Small cups of support. <span className="text-cyan-300">Big creative energy.</span>
        </h1>
        <p className="mt-7 text-base leading-8 text-slate-300 md:text-lg">
          Buy Me a Chai is a welcoming place for artists, writers, developers, educators, and independent makers to turn appreciation into support. We make it easy for people who love your work to help fuel what comes next.
        </p>
      </section>

      <section className="mt-16 grid gap-5 md:grid-cols-3">
        {values.map((value, index) => (
          <article key={value.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
            <span className="text-sm font-bold text-cyan-300">0{index + 1}</span>
            <h2 className="mt-4 text-xl font-bold">{value.title}</h2>
            <p className="mt-3 leading-7 text-slate-300">{value.description}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/15 to-blue-500/10 px-7 py-10 text-center md:px-14">
        <h2 className="text-3xl font-bold">Your next idea deserves a little fuel.</h2>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">
          Whether you are building your first project or creating for an audience of thousands, start a page and invite your community to buy you a chai.
        </p>
        <Link href="/login" className="mt-7 inline-block rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition hover:scale-[1.02]">
          Start your page
        </Link>
      </section>
    </main>
  );
}

export const metadata = {
  title: "About - Buy Me a Chai",
}
 
