import { Link } from "@tanstack/react-router"
import { Sparkles, Shield, Zap } from "lucide-react"

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
  
 const Home = () => {
    return (
      <div className="space-y-8">
        <section className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-blue-500/10 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
                  PrimeLab
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
                Générateur de{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                  nombres premiers
                </span>
              </h1>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  to="/prime-generator"
                  className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105"
                >
                  Démarrer le générateur
                  <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                </Link>
                <Link
                  to="/primes"
                  className="inline-flex items-center px-6 py-3 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all"
                >
                  Tester un nombre
                </Link>
              </div>
              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                Explorez deux approches : vérification instantanée d'un nombre
                entré à la main ou génération automatique via une fausse API
                simulée.
              </p>
              
            </div>
            <div className="hidden lg:flex flex-col items-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-transparent rounded-3xl blur-2xl" />
              <div className="h-[320px] w-full relative bg-gradient-to-br from-slate-800/50 to-blue-900/30 rounded-3xl border border-white/10 backdrop-blur-xl p-10 flex items-center justify-center">
                <div className="text-center space-y-3">
                  <div className="text-7xl font-bold text-blue-400/50">7</div>
                  <div className="text-sm text-slate-400 uppercase tracking-widest">
                    Nombre premier
                  </div>
                </div>
              </div>
  
              <section className="grid md:grid-cols-3 gap-4 mt-5 w-full">
                {highlights.map(({ icon: Icon, title, description }) => (
                  <article
                    key={title}
                    className="group relative p-4 rounded-xl border border-white/5 bg-slate-900/30 backdrop-blur-sm hover:border-white/10 hover:bg-slate-900/50 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative">
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-500/20 text-blue-300 mb-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base font-semibold text-white mb-2">{title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{description}</p>
                    </div>
                  </article>
                ))}
              </section>
  
            </div>
          </div>
        </section>
      </div>
    )
  }

export default Home