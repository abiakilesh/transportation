import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Users, UserCircle, Truck } from 'lucide-react';
import RoleCard from './components/RoleCard';
import { useState } from 'react';
import AdminLogin from './pages/AdminLogin';
import ManagerLogin from './pages/ManagerLogin';
import DriverLogin from './pages/DriverLogin';
import DriverDashboard from './pages/DriverDashboard';
import StartTrip from './pages/StartTrip';

function App() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);

  const roles = [
    {
      title: 'Admin',
      description: 'Manage vehicles, drivers, and overall system',
      Icon: Users
    },
    {
      title: 'Manager',
      description: 'Monitor trips and handle approvals',
      Icon: UserCircle
    },
    {
      title: 'Driver',
      description: 'View assignments and update trip status',
      Icon: Truck
    }
  ];

  const renderLoginPage = () => {
    switch (selectedRole?.toLowerCase()) {
      case 'admin':
        return <AdminLogin />;
      case 'manager':
        return <ManagerLogin />;
      case 'driver':
        return <DriverLogin />;
      default:
        return null;
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/driver/dashboard" element={<DriverDashboard />} />
        <Route path="/driver/start-trip" element={<StartTrip />} />
        <Route
          path="/"
          element={
            selectedRole ? (
              renderLoginPage()
            ) : (
              <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
                {/* Hero Section */}
                <div className="container mx-auto px-4 py-20">
                  <div className="text-center mb-20">
                    <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                      Transportation & Logistics
                    </h1>
                    <p className="text-2xl text-slate-400">Management System</p>
                  </div>

                  {/* Role Cards */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {roles.map((role) => (
                      <div key={role.title} onClick={() => setSelectedRole(role.title)}>
                        <RoleCard
                          title={role.title}
                          description={role.description}
                          Icon={role.Icon}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer */}
                <footer className="text-center py-8 text-slate-500">
                  <p>© {new Date().getFullYear()} Transportation & Logistics Management System. All rights reserved.</p>
                </footer>
              </div>
            )
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;