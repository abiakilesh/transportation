import React from 'react';
import { PackageCheck, MapPin } from 'lucide-react';

const LoadDownForm = () => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <PackageCheck className="w-5 h-5 mr-2 text-blue-400" />
        Load Down Details
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Delivery Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
              placeholder="Enter delivery address"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Expected Delivery Time
          </label>
          <input
            type="datetime-local"
            className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Recipient Contact
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
            placeholder="Enter recipient phone number"
          />
        </div>
      </form>
    </div>
  );
};

export default LoadDownForm;