import React, { lazy } from "react";
import { Navigate } from "react-router-dom";
import PublicLayout from "../layout/Public";
import PrivateLayout from "../layout/Private";

// const PublicLayout = lazy(()=> import("../layout/Public"))
// const PrivateLayout = lazy(()=> import("../layout/Private"))
const Login = lazy(()=> import("../pages/GuestPage"))
const Main = lazy(()=> import("../pages/Main"))
const Registration = lazy(()=> import("../pages/RegistrationPage"))


export const authRoutes = {
  path: '/',
  element: <PublicLayout />,
  exact: false,
  children: [
    {
      path: '*',
      element: <Navigate to="/auth" />,
    },
    {
      path: '/auth',
      element: <Login />
    },
    {
      path: '/registration',
      element: <Registration />
    },
  ]
};

export const mainRoutes = {
  path: '/home',
  element: <PrivateLayout />,
  exact: false,
  children: [
    {
      path: '*',
      element: <Navigate to="/home" />,
    },
    {
      path: '/home',
      element: <Main />
    },
  ]
};