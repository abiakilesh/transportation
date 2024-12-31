import React from 'react';
import { Package, Clipboard } from 'lucide-react';

const LoadInForm = () => {
  return (
    <div className="bg-slate-800/50 rounded-lg p-6 backdrop-blur-sm border border-slate-700">
      <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
        <Package className="w-5 h-5 mr-2 text-blue-400" />
        Load In Details
      </h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Cargo Reference Number
          </label>
          <div className="relative">
            <Clipboard className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              className="w-full pl-10 pr-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
              placeholder="Enter reference number"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Cargo Weight (kg)
          </label>
          <input
            type="number"
            className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white"
            placeholder="Enter cargo weight"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-300 mb-2">
            Cargo Type
          </label>
          <select className="w-full px-3 py-2 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-white">
            <option value="">Select cargo type</option>
            <option value="perishable">Perishable</option>
            <option value="fragile">Fragile</option>
            <option value="hazardous">Hazardous</option>
            <option value="standard">Standard</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default LoadInForm;