import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Santri from "./pages/Santri";
import AppLayout from "./layouts/AppLayout";
import SantriLayout from "./layouts/SantriLayout";
import SantriList from "./pages/Santri/SantriList";
import SantriNilai from "./pages/Santri/SantriNilai";
import SantriAbsensi from "./pages/Santri/SantriAbsensi";
import SantriDetail from "./pages/Santri/SantriDetail";
import UserLayout from "./layouts/UserLayout";
import Dashboard from "./pages/User/Dashboard";
import MyProfile from "./pages/User/MyProfile";
import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import AuthLayout from "./pages/Layout/AuthLayout";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        index: true,
        element: <SignIn />
      },
      {
        path: "/sign-up",
        element: <SignUp />
      }
    ]
  },
  {
    path: "/user",
    element: <UserLayout />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/admin/about",
        element: <About />,
      },
      {
        path: "/admin/santri",
        element: <SantriLayout />,
        children: [
          {
            index: true,
            element: <SantriList />,
          },
          {
            path: "list",
            children: [
              {
                index: true,
                element: <SantriList />,
              },
              {
                path: ":santri_id",
                element: <SantriDetail />,
              },
            ],
          },
          {
            path: "nilai",
            element: <SantriNilai />,
          },
          {
            path: "absensi",
            element: <SantriAbsensi />,
          },
        ],
      },
    ],
  },
]);
