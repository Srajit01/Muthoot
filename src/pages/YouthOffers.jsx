import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const YouthOffers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 to-pink-50 p-6">
      <Link 
        to="/"
        className="inline-flex items-center text-rose-600 hover:text-rose-700 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Dashboard
      </Link>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-rose-800 mb-6">Youth Offers & Rewards</h1>
        {/* Add youth offers content here */}
      </motion.div>
    </div>
  );
};

export default YouthOffers;