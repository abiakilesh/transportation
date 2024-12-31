import React from 'react';
import LoginForm from '../components/LoginForm';
import { Users } from 'lucide-react';

const AdminLogin: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Handle admin login logic here
    console.log('Admin login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <Users className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Admin Login</h1>
        <p className="text-slate-400">Access the admin dashboard</p>
      </div>
      <LoginForm role="admin" onSubmit={handleLogin} />
    </div>
  );
};

export default AdminLogin;