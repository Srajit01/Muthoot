import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const FinancialDashboard = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-yellow-50 p-6">
      <Link 
        to="/"
        className="inline-flex items-center text-amber-600 hover:text-amber-700 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Dashboard
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-amber-800 mb-6">Financial Dashboard</h1>
        {/* Add financial dashboard content here */}
      </motion.div>
    </div>
  );
};

export default FinancialDashboard;