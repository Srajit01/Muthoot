import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';

const GoldLoanApplication = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/products/gold-loans')} // Go back to Gold Loan details
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Gold Loan Details
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
              Apply for a Gold Loan
            </h1>
            <p className="text-gray-600 text-lg mb-8">
              Please fill out the form below to start your application. Our team will contact you shortly.
            </p>

            {/* Basic Form Fields */}
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="goldWeight" className="block text-sm font-medium text-gray-700">
                  Approximate Gold Weight (in grams)
                </label>
                <input
                  type="number"
                  id="goldWeight"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                />
              </div>

              <div>
                <label htmlFor="loanAmount" className="block text-sm font-medium text-gray-700">
                  Desired Loan Amount (₹)
                </label>
                <input
                  type="number"
                  id="loanAmount"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full bg-yellow-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors"
              >
                Submit Application
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoldLoanApplication;