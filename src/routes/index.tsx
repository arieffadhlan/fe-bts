import { Suspense } from "react";
import { Outlet, useRoutes } from "react-router";

import SignUpPage from "@/app/auth/sign-up";
import SignInPage from "@/app/auth/sign-in";
import DashboardPage from "@/app/dashboard";
import ChecklistPage from "@/app/dashboard/checklist";
import DashboardLayout from "@/features/dashboard/components/DashboardLayout";
import CreateChecklistPage from "@/app/dashboard/checklist/create";
import ChecklistDetailPage from "@/app/dashboard/checklist/detail";

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
        { path: 'checklist', element: <ChecklistPage />, index: true },
        { path: 'checklist/:id', element: <ChecklistDetailPage /> },
        { path: 'checklist/create', element: <CreateChecklistPage /> },
      ]
    }
  ];

  return useRoutes([...publicRoutes, ...dashboardRoutes]);
}

export default AppRouter;