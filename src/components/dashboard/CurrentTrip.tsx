import React from 'react';
import { Navigation2, Clock, MapPin } from 'lucide-react';

const CurrentTrip = () => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Navigation2 className="w-5 h-5 mr-2 text-blue-400" />
        Current Trip
      </h2>
      <div className="space-y-4">
        <div className="flex items-start space-x-4">
          <div className="flex-1">
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4 text-green-400" />
              <span className="text-slate-300">From: tamil nadu salem</span>
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <MapPin className="w-4 h-4 text-red-400" />
              <span className="text-slate-300">To: gujarat surat</span>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-slate-400">
              <Clock className="w-4 h-4 mr-1" />
              <span>time: 2h 30m</span>
            </div>
            <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm mt-2">
              In Progress
            </span>
          </div>
        </div>
        <div className="w-full bg-slate-700/50 rounded-full h-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{ width: '60%' }}></div>
        </div>
      </div>
    </div>
  );
};

export default CurrentTrip;