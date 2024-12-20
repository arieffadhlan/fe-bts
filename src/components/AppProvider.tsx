import { Suspense } from "react";
import { BrowserRouter } from "react-router";

import DashboardNavbar from "@/features/dashboard/components/DashboardNavbar";

const AppProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <Suspense>
      <BrowserRouter>
        <DashboardNavbar />
        <main className="max-w-7xl mx-auto px-6 py-4">
          {children}
        </main>
      </BrowserRouter>
    </Suspense>
  );
}

export default AppProvider