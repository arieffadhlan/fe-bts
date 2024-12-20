import { Suspense } from "react";
import { Outlet, useRoutes } from "react-router";

import SignUpPage from "@/app/auth/sign-up";
import SignInPage from "@/app/auth/sign-in";
import DashboardPage from "@/app/dashboard";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import CreateChecklistPage from "@/app/dashboard/create";

const AppRouter = () => {
  const publicRoutes = [
    { path: '/auth/sign-up', index: true, element: <SignUpPage /> },
    { path: '/auth/sign-in', index: true, element: <SignInPage /> },
  ];

  const dashboardRoutes = [
    {
      path: '/',
      element: (
        <DashboardLayout>
          <Suspense>
            <Outlet />
          </Suspense>
        </DashboardLayout>
      ),
      children: [
        { index: true, element: <DashboardPage /> },
        { path: '/create', element: <CreateChecklistPage />, index: true },
      ]
    }
  ];

  return useRoutes([...publicRoutes, ...dashboardRoutes]);
}

export default AppRouter;