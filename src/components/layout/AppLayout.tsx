import { ReactNode } from "react";
import Sidebar from "./Sidebar";
import MobileNav from "./MobileNav";
import MobileHeader from "./MobileHeader";

interface AppLayoutProps {
  children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <MobileHeader />
      <main className="lg:ml-64 pb-20 lg:pb-0">
        {children}
      </main>
      <MobileNav />
    </div>
  );
}
