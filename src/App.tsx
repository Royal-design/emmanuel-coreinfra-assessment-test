import {
  Navigate,
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { RootLayout } from "./Layout/RootLayout";
import { DashboardLayout } from "./Layout/DashboardLayout/DashboardLayout";
import { DashboardPage } from "./Pages/DashboardPage";
import { Branch } from "./Pages/Branch";
import { Role } from "./Pages/Role";
import { CardScheme } from "./Pages/CardScheme";
import { CardProfile } from "./Pages/CardProfile";
import { CardRequest } from "./Pages/CardRequest";
import { Stock } from "./Pages/Stock";
import { Cards } from "./Pages/Cards";
import { BlockCard } from "./Pages/BlockCard";
import { AuthorizationList } from "./Pages/AuthorizationList";
import { AuthorizationQueue } from "./Pages/AuthorizationQueue";
import { Trail } from "./Pages/Trail";
import { Account } from "./Pages/Account";
import { Users } from "./Pages/Users";
import { ErrorPage } from "./Pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
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
          },
          {
            path: "roles",
            element: <Role />
          },
          {
            path: "users",
            element: <Users />
          },
          {
            path: "card-scheme",
            element: <CardScheme />
          },
          {
            path: "card-profile",
            element: <CardProfile />
          },
          {
            path: "card-request",
            element: <CardRequest />
          },
          {
            path: "stock",
            element: <Stock />
          },
          {
            path: "cards",
            element: <Cards />
          },
          {
            path: "block-card",
            element: <BlockCard />
          },
          {
            path: "authorization-list",
            element: <AuthorizationList />
          },
          {
            path: "authorization-queue",
            element: <AuthorizationQueue />
          },
          {
            path: "trail",
            element: <Trail />
          },
          {
            path: "account",
            element: <Account />
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
