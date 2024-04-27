import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import WireframeOne from "pages/WireframeOne";
import WireframeThree from "pages/WireframeThree";
import WireframeTwo from "pages/WireframeTwo";
import WireframeFour from "pages/WireframeFour";
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
      path: "wireframethree",
      element: <WireframeThree />,
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
      path: "login",
      element: <Login />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
