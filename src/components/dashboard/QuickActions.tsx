import React from 'react';
import { Play, Pause, AlertTriangle, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      icon: Play,
      label: 'Start Trip',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10',
      hoverBg: 'hover:bg-green-500/20',
      onClick: () => navigate('/driver/start-trip')
    },
    {
      icon: Pause,
      label: 'Break Time',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10',
      hoverBg: 'hover:bg-yellow-500/20',
      onClick: () => console.log('Break time')
    },
    {
      icon: AlertTriangle,
      label: 'Report Issue',
      color: 'text-red-400',
      bgColor: 'bg-red-500/10',
      hoverBg: 'hover:bg-red-500/20',
      onClick: () => console.log('Report issue')
    },
    {
      icon: CheckCircle,
      label: 'Complete Trip',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10',
      hoverBg: 'hover:bg-blue-500/20',
      onClick: () => console.log('Complete trip')
    }
  ];

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 gap-4">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={action.onClick}
            className={`${action.bgColor} ${action.hoverBg} p-4 rounded-lg transition-colors duration-200 flex flex-col items-center justify-center`}
          >
            <action.icon className={`w-6 h-6 ${action.color} mb-2`} />
            <span className="text-sm text-slate-300">{action.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;