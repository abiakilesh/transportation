import React from 'react';
import { ArrowLeft, Truck } from 'lucide-react';
import LoadInForm from '../components/trip/LoadInForm';
import LoadDownForm from '../components/trip/LoadDownForm';
import { useNavigate } from 'react-router-dom';

const StartTrip = () => {
  const navigate = useNavigate();

  const handleStartTrip = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement trip start logic
    navigate('/driver/dashboard');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/driver/dashboard')}
          className="flex items-center text-slate-300 hover:text-white mb-6"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </button>

        <header className="mb-8">
          <div className="flex items-center space-x-3">
            <Truck className="w-8 h-8 text-blue-400" />
            <h1 className="text-3xl font-bold">Start New Trip</h1>
          </div>
          <p className="text-slate-400 mt-2">Enter trip details to begin your journey</p>
        </header>

        <form onSubmit={handleStartTrip} className="space-y-6">
          <LoadInForm />
          <LoadDownForm />
          
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/driver/dashboard')}
              className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors duration-200"
            >
              Start Trip
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default StartTrip;