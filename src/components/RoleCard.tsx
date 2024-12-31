import React from 'react';
import { LucideIcon } from 'lucide-react';

interface RoleCardProps {
  title: string;
  description: string;
  Icon: LucideIcon;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, description, Icon }) => {
  return (
    <div className="group bg-slate-800/50 p-8 rounded-lg backdrop-blur-sm transition-all duration-300 cursor-pointer border border-slate-700/50 hover:bg-slate-700/50 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/10 hover:-translate-y-1">
      <div className="flex flex-col items-center text-center space-y-4">
        <Icon className="w-16 h-16 text-blue-400 transition-transform duration-300 group-hover:scale-110 group-hover:text-blue-300" />
        <h2 className="text-2xl font-bold text-white transition-colors duration-300 group-hover:text-blue-300">{title}</h2>
        <p className="text-slate-400 transition-colors duration-300 group-hover:text-slate-300">{description}</p>
      </div>
    </div>
  );
};

export default RoleCard;