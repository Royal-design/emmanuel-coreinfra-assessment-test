import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { RootLayout } from "./Layout/RootLayout";
import { DashboardLayout } from "./Layout/DashboardLayout/DashboardLayout";
import { DashboardPage } from "./Pages/DashboardPage";
import { Branch } from "./Pages/Branch";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />
          },
          {
            path: "branches",
            element: <Branch />
          }
        ]
      }
    ]
  }
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
