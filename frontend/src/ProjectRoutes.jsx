import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { AuthContext } from './AuthContext';
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
import Temp from 'pages/Temp';
import Guide from 'pages/Guide';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  console.log('isAuthenticated', isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="wireframeone" element={<WireframeOne />} />
        <Route path="login" element={<Login />} />
        <Route
          path="user"
          element={
            <ProtectedRoute>
              <UserProfile />
            </ProtectedRoute>
          }
        />
        <Route
          path="admin-view"
          element={
            <ProtectedRoute>
              <AdminView />
            </ProtectedRoute>
          }
        />
        <Route path="wireframefour" element={<WireframeFour />} />
        <Route path="signup" element={<SignUp />} />
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="deploy-vm"
          element={
            <ProtectedRoute>
              <DeployVM />
            </ProtectedRoute>
          }
        />
        <Route
          path="temp"
          element={
            <ProtectedRoute>
              <Temp />
            </ProtectedRoute>
          }
        />
        <Route
          path="guide"
          element={
            <ProtectedRoute>
              <Guide />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default ProjectRoutes;
