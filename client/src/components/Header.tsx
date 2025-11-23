import { Link } from "@tanstack/react-router"


const Header = () => {

    const navLinks = [
        { to: "/", label: "Accueil" },
        { to: "/primes", label: "Primes" },
        { to: "/prime-generator", label: "Générateur" },
      ];

    return(
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
    )
}

export default Header