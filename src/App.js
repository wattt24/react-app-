import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Route, BrowserRouter, Routes, Outlet, useLocation, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Register from './pages/Register';
import Login from './pages/Login';
import NotPage from './pages/NotPage';
import AboutUs from './pages/AboutUs';
import { AuthProvider, useAuth } from './AuthProvider';
const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  if (!user) {
   return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
 };
const LayoutAdmin = () => {
  return (
  <ProtectedRoute>
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="m-6 p-10 bg-gray-50 min-h-screen rounded-lg">
          <Outlet /> 
        </div>
      </div>
    </div>
  </ProtectedRoute>
  );

}

function App() {
  return (
    <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutAdmin />}>
          <Route path='/' element={<Dashboard />} />
          <Route path='/user' element={<Users />} />
          <Route path='/about' element={<AboutUs />} /> 
          <Route path='*' element={<NotPage />} />
        </Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
