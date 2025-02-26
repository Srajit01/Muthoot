import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, IndianRupee } from 'lucide-react';

const QuickLoan = () => {
  const [loanAmount, setLoanAmount] = useState(10000);
  const [goldWeight, setGoldWeight] = useState(10);
  const [loanDuration, setLoanDuration] = useState('3');
  const [interestRate, setInterestRate] = useState(7.5);
  const [processingFee, setProcessingFee] = useState(1000);

  const calculateEMI = () => {
    const principal = loanAmount;
    const monthlyInterestRate = interestRate / (12 * 100);
    const numberOfPayments = parseInt(loanDuration);

    const emi =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    return emi.toFixed(2);
  };

  const emiValue = calculateEMI();
  const totalRepayment = (emiValue * parseInt(loanDuration)).toFixed(2);

  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50 p-6">
      <Link
        to="/"
        className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Dashboard
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-yellow-800 mb-6">Quick Gold Loan</h1>
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-800">Loan Details</h2>
              <div className="space-y-3">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Amount
                  </label>
                  <div className="relative">
                    <IndianRupee className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="number"
                      className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                      placeholder="Enter amount"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Gold Weight (in grams)
                  </label>
                  <input
                    type="number"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    placeholder="Enter gold weight"
                    value={goldWeight}
                    onChange={(e) => setGoldWeight(e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Loan Duration
                  </label>
                  <select
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500"
                    value={loanDuration}
                    onChange={(e) => setLoanDuration(e.target.value)}
                  >
                    <option value="3">3 months</option>
                    <option value="6">6 months</option>
                    <option value="12">12 months</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6">
              <h2 className="text-xl font-semibold text-yellow-800 mb-4">Loan Summary</h2>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Interest Rate</span>
                  <span className="font-medium text-gray-900">{interestRate}% p.a.</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Processing Fee</span>
                  <span className="font-medium text-gray-900">₹{processingFee}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly EMI</span>
                  <span className="font-medium text-gray-900">₹{emiValue}</span>
                </div>
                <div className="pt-3 border-t border-yellow-200">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-yellow-800">Total Repayment</span>
                    <span className="text-yellow-800">₹{totalRepayment}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex justify-end">
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all">
              Apply Now
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default QuickLoan;