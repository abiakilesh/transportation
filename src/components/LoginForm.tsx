import React, { useState } from 'react';
import { Lock, Mail } from 'lucide-react';

interface LoginFormProps {
  role: 'admin' | 'manager' | 'driver';
  onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ role, onSubmit }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-sm">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
          Email
        </label>
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-slate-400"
            placeholder="Enter your email"
            required
          />
        </div>
      </div>
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-slate-300 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full pl-10 pr-3 py-2 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white placeholder-slate-400"
            placeholder="Enter your password"
            required
          />
        </div>
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-200"
      >
        Login as {role.charAt(0).toUpperCase() + role.slice(1)}
      </button>
    </form>
  );
};

export default LoginForm;