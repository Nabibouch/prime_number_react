import { createFileRoute, Link } from "@tanstack/react-router";
import { Sparkles, Shield, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const highlights = [
  {
    icon: Sparkles,
    title: "Expérimentez",
    description: "Testez la vérification de nombres premiers en direct.",
  },
  {
    icon: Shield,
    title: "Validation Zod",
    description: "Chaque nombre provient d'une API simulée et typée.",
  },
  {
    icon: Zap,
    title: "Flux continu",
    description: "Générez des premiers en rafale grâce au mode auto.",
  },
];

function Index() {
  return (
    <div className="space-y-12">
      <section className="rounded-3xl bg-gradient-to-br from-slate-900 via-blue-800 to-blue-600 text-white px-8 py-14 shadow-2xl">
        <p className="text-sm uppercase tracking-widest text-white/70">
          PrimeLab
        </p>
        <h1 className="mt-4 text-4xl font-semibold leading-tight">
          Générateur de nombres premiers
        </h1>
        <p className="mt-4 text-white/80 text-lg max-w-2xl">
          Explorez deux approches : vérification instantanée d'un nombre entré à
          la main ou génération automatique via une fausse API.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            to="/prime-generator"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-slate-900 font-semibold shadow-lg shadow-white/20 hover:bg-slate-100 transition"
          >
            Démarrer le générateur
          </Link>
          <Link
            to="/primes-checker"
            className="inline-flex items-center justify-center rounded-full border border-white/40 px-6 py-3 text-white font-semibold hover:bg-white/10 transition"
          >
            Tester un nombre
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-3">
        {highlights.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="inline-flex items-center justify-center rounded-xl bg-slate-100 p-3 text-slate-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {title}
            </h3>
            <p className="mt-2 text-sm text-slate-500">{description}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
