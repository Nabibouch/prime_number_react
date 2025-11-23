import Header from "@/components/Header";
import { createRootRoute, Outlet } from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools"


const RootLayout = () => (
  <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 text-white">
    <Header />
    <main className="max-w-7xl mx-auto px-6 py-3">
      <Outlet />
    </main>
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({ component: RootLayout });
