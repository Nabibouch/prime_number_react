import { createRootRoute, Link, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"

const navLinks = [
  { to: "/", label: "Accueil" },
  { to: "/primes", label: "Primes" },
  { to: "/prime-generator", label: "Générateur" },
];

const RootLayout = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
    <header className="sticky top-0 z-50 border-b border-white/5 bg-slate-950/60 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-8 px-6 py-5">
        <Link
          to="/"
          className="text-xl font-bold tracking-tight text-white hover:text-blue-300 transition-colors"
        >
          PrimeMaroc
        </Link>
        <nav className="flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 rounded-lg text-sm font-medium text-slate-400 hover:text-white 
              hover:bg-white/5 transition-all [&.active]:text-white [&.active]:bg-blue-500/10 [&.active]:border [&.active]:border-blue-500/20"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
    <main className="max-w-7xl mx-auto px-6 py-16">
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
