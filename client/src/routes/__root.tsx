import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/primes", label: "Primes" },
  { to: "/prime-generator", label: "Générateur" },
];

const RootLayout = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900">
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 backdrop-blur">
      <div className="max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 px-4 py-4">
        <Link
          to="/"
          className="text-lg font-semibold text-slate-900 tracking-tight"
        >
          PrimeMaroc
        </Link>
        <nav className="flex flex-wrap items-center gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-3 py-1.5 rounded-full text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors [&.active]:bg-slate-900 [&.active]:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
    <main className="max-w-5xl mx-auto px-4 py-12">
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
