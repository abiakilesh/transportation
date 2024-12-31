import React from 'react';
import { Bell, MessageSquare, AlertCircle, CheckCircle } from 'lucide-react';

const Notifications = () => {
  const notifications = [
    {
      id: 1,
      type: 'message',
      icon: MessageSquare,
      content: 'New route assignment available',
      time: '5m ago',
      color: 'text-blue-400',
      bgColor: 'bg-blue-500/10'
    },
    {
      id: 2,
      type: 'alert',
      icon: AlertCircle,
      content: 'Weather alert on your route',
      time: '1h ago',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-500/10'
    },
    {
      id: 3,
      type: 'success',
      icon: CheckCircle,
      content: 'Last trip report approved',
      time: '2h ago',
      color: 'text-green-400',
      bgColor: 'bg-green-500/10'
    }
  ];

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Bell className="w-5 h-5 mr-2 text-blue-400" />
        Notifications
      </h2>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`${notification.bgColor} p-4 rounded-lg flex items-start space-x-3`}
          >
            <notification.icon className={`w-5 h-5 ${notification.color} mt-1`} />
            <div className="flex-1">
              <p className="text-slate-300">{notification.content}</p>
              <span className="text-sm text-slate-400">{notification.time}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;