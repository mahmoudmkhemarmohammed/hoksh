import { lazy } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Import custom hooks and components.
import UseResetScroll from "@hooks/useResetScroll";
import PageSuspance from "@components/feedback/PageSuspance/PageSuspance";

// Error Page
import Error from "@pages/Error";

// Lazy loading Pages to improve load time and reduce bundle size.
const MainLayout = lazy(() => import("@layouts/MainLayout"));
const Home = lazy(() => import("@pages/Home"));
const ProjectDetails = lazy(() => import("@pages/ProjectDetails"));
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <UseResetScroll />
        <PageSuspance>
          <MainLayout />
        </PageSuspance>
      </>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspance>
            <Home />
          </PageSuspance>
        ),
      },
      {
        path: "project-details/:id",
        element: (
          <PageSuspance>
            <ProjectDetails />
          </PageSuspance>
        ),
      },
    ],
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
