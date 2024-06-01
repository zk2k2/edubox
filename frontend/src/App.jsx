import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './AuthContext'; // Ensure correct path
import ProjectRoutes from './ProjectRoutes'; // Ensure correct path

function App() {

  return (
    <AuthProvider>
      <ProjectRoutes />
    </AuthProvider>
  );
}

export default App;
