import React from 'react';
import { Clock, MapPin } from 'lucide-react';

const RecentTrips = () => {
  const trips = [
    {
      id: 1,
      from: 'erode',
      to: 'surat',
      date: '2024-03-10',
      status: 'Completed',
      statusColor: 'text-green-400',
      statusBg: 'bg-green-500/20',
    },
    {
      id: 2,
      from: 'salem',
      to: 'guna',
      date: '2024-03-09',
      status: 'Completed',
      statusColor: 'text-green-400',
      statusBg: 'bg-green-500/20',
    },
    {
      id: 3,
      from: 'kovai',
      to: 'chennai',
      date: '2024-03-08',
      status: 'Cancelled',
      statusColor: 'text-red-400',
      statusBg: 'bg-red-500/20',
    },
  ];

  return (
    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4">Recent Trips</h2>
      <div className="space-y-4">
        {trips.map((trip) => (
          <div
            key={trip.id}
            className="p-4 bg-slate-700/30 rounded-lg hover:bg-slate-700/50 transition-colors duration-200"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-300">
                    {trip.from} → {trip.to}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-400">
                  <Clock className="w-4 h-4" />
                  <span>{trip.date}</span>
                </div>
              </div>
              <span
                className={`px-3 py-1 ${trip.statusBg} ${trip.statusColor} rounded-full text-sm`}
              >
                {trip.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentTrips;
