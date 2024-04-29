import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home/Home";
import NotFound from "pages/NotFound";
import WireframeOne from "pages/WireframeOne";
import UserProfile from "pages/UserProfile";
import WireframeTwo from "pages/WireframeTwo";
import WireframeFour from "pages/WireframeFour";
import SignUp from "pages/signup/SignUp";
import Login from "pages/Login";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "wireframeone",
      element: <WireframeOne />,
    },
    {
      path: "user",
      element: <UserProfile />,
    },
    {
      path: "wireframetwo",
      element: <WireframeTwo />,
    },
    {
      path: "wireframefour",
      element: <WireframeFour />,
    },
    {
      path: "signUp",
      element: <SignUp />,
    },
    {
      path: "Login",
      element: <Login />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
