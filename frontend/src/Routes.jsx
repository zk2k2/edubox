import React from 'react';
import { useRoutes } from 'react-router-dom';
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import WireframeOne from 'pages/WireframeOne';
import UserProfile from 'pages/UserProfile';
import AdminView from 'pages/AdminView';
import WireframeFour from 'pages/WireframeFour';
import SignUp from 'pages/SignUp';
import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import DeployVM from 'pages/DeployVM';

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: '/', element: <Home /> },
    { path: '*', element: <NotFound /> },
    {
      path: 'wireframeone',
      element: <WireframeOne />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'user',
      element: <UserProfile />,
    },
    {
      path: 'AdminView',
      element: <AdminView />,
    },
    {
      path: 'wireframefour',
      element: <WireframeFour />,
    },
    {
      path: 'signup',
      element: <SignUp />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'dashboard',
      element: <Dashboard />,
    },
    {
      path: 'deploy-vm',
      element: <DeployVM />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
