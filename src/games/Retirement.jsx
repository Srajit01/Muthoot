import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft } from 'lucide-react';

const Retirement = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <Link
        to="/quiz-game"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Quiz Game Hub
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-indigo-800 mb-6">Retirement Planning</h1>
        <p className="text-gray-600 text-lg">Plan for your future in this fun and engaging game!</p>
        {/* Add actual game content here */}
      </motion.div>
    </div>
  );
};

export default Retirement;