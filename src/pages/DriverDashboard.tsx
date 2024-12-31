import React from 'react';
import CurrentTrip from '../components/dashboard/CurrentTrip';
import QuickActions from '../components/dashboard/QuickActions';
import RecentTrips from '../components/dashboard/RecentTrips';
import Notifications from '../components/dashboard/Notifications';

const DriverDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold">Driver Dashboard</h1>
          <p className="text-slate-400">Welcome back, John Doe</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            <CurrentTrip />
            <QuickActions />
          </div>
          <div className="space-y-6">
            <RecentTrips />
            <Notifications />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverDashboard;