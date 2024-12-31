import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginForm from '../components/LoginForm';
import { Truck } from 'lucide-react';

const DriverLogin: React.FC = () => {
  const navigate = useNavigate();

  const handleLogin = (email: string, password: string) => {
    // TODO: Implement actual authentication logic
    // For demo purposes, we'll just check if fields are not empty
    if (email && password) {
      navigate('/driver/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8">
        <Truck className="w-16 h-16 text-blue-400 mx-auto mb-4" />
        <h1 className="text-3xl font-bold text-white mb-2">Driver Login</h1>
        <p className="text-slate-400">Access your driver portal</p>
      </div>
      <LoginForm role="driver" onSubmit={handleLogin} />
    </div>
  );
};

export default DriverLogin;