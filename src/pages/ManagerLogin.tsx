import React from 'react';
import LoginForm from '../components/LoginForm';
import { UserCircle } from 'lucide-react';

const ManagerLogin: React.FC = () => {
  const handleLogin = (email: string, password: string) => {
    // Handle manager login logic here
    console.log('Manager login:', { email, password });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <UserCircle className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Manager Login</h1>
        <p className="text-slate-400">Access the management dashboard</p>
      </div>
      <LoginForm role="manager" onSubmit={handleLogin} />
    </div>
  );
};

export default ManagerLogin;