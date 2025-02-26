import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Scan, HelpCircle, HandMetal, Headphones, ArrowRight } from 'lucide-react';

const VRConsultation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        <Link
          to="/dashboard"
          className="inline-flex items-center text-purple-600 hover:text-purple-700 mb-8"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Dashboard
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-purple-500 to-purple-600 p-6">
            <h1 className="text-3xl font-bold text-white flex items-center">
              <Headphones className="h-6 w-6 mr-2" />
              VR Loan Consultation
            </h1>
          </div>

          <div className="p-8">
            {/* Introduction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Experience the Future of Finance</h2>
              <p className="text-gray-600 leading-relaxed">
                Explore our innovative VR and AR consultation features, designed to provide you with personalized
                financial guidance in an engaging and accessible way.
              </p>
            </motion.div>

            {/* Scan Brochure Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-3">
                <Scan className="h-5 w-5 mr-2 text-purple-600" />
                Scan for Loan Information
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Scan brochures or posters within our branches to unlock 3D models of loan options, interest rates, and
                EMI plans.
              </p>
              {/* (Replace with your actual AR component) */}
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-gray-400">AR Scanner Placeholder</span>
              </div>
            </motion.div>

            {/* Virtual Assistant Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mb-8"
            >
              <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-3">
                <HandMetal className="h-5 w-5 mr-2 text-purple-600" />
                AR Virtual Assistant
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Point your phone at an AR marker, and a virtual banker will appear to guide you through our services
                and answer your questions.
              </p>
              {/* (Replace with your actual AR component) */}
              <div className="bg-gray-50 rounded-lg p-4 text-center">
                <span className="text-gray-400">AR Assistant Placeholder</span>
              </div>
            </motion.div>

            {/* Help and Support Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 flex items-center mb-3">
                <HelpCircle className="h-5 w-5 mr-2 text-purple-600" />
                Need Assistance?
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Have questions or need technical support? Contact our VR support team.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all"
              >
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default VRConsultation;