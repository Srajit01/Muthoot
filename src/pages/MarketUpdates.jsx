import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TrendingUp, IndianRupee, ArrowRight, Lightbulb } from 'lucide-react';

const MarketUpdates = () => {
  const [goldData, setGoldData] = useState({
    currentRate: 0,
    yesterdayClose: 0,
    weeklyChange: 0,
  });

  const [loanAmount, setLoanAmount] = useState(10000);
  const [interestRate, setInterestRate] = useState(12);
  const [loanTenure, setLoanTenure] = useState(12);
  const [emi, setEMI] = useState(0);

  useEffect(() => {
    // Fetch real-time gold prices from an API
    const fetchGoldPrice = async () => {
      try {
        // Replace with your actual API endpoint
        const response = await fetch('YOUR_GOLD_PRICE_API_ENDPOINT');
        const data = await response.json();

        // Assuming the API returns data in the format: { currentRate, yesterdayClose, weeklyChange }
        setGoldData({
          currentRate: data.currentRate,
          yesterdayClose: data.yesterdayClose,
          weeklyChange: data.weeklyChange,
        });
      } catch (error) {
        console.error('Error fetching gold prices:', error);
        // Handle error appropriately (e.g., display an error message)
      }
    };

    // Call the function to fetch gold prices
    fetchGoldPrice();

    // Fetch Gold every hour
    const intervalId = setInterval(fetchGoldPrice, 60 * 60 * 1000); // Every hour

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const numberOfPayments = loanTenure;

    const emiValue =
      (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
      (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

    setEMI(emiValue.toFixed(2));
  };

  const handleLoanAmountChange = (e) => {
    setLoanAmount(parseFloat(e.target.value) || 0);
  };

  const handleInterestRateChange = (e) => {
    setInterestRate(parseFloat(e.target.value) || 0);
  };

  const handleLoanTenureChange = (e) => {
    setLoanTenure(parseInt(e.target.value) || 0);
  };

  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.1), 0 8px 10px -6px rgba(245, 158, 11, 0.1)' }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden lg:col-span-3"
    >
      <div className="bg-gradient-to-r from-amber-600 to-amber-700 px-6 py-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <TrendingUp className="h-6 w-6 mr-2" />
          Market Updates
        </h3>
      </div>
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-2">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-6 relative overflow-hidden border border-amber-200">
              <div className="relative z-10">
                <h4 className="text-2xl font-bold text-amber-900 mb-2">Gold Prices Are Rising!</h4>
                <p className="text-amber-800 mb-4">Take advantage of our special gold loan rates before prices increase further.</p>
                <div className="flex flex-wrap items-center gap-4">
                  <div>
                    <p className="text-sm text-amber-700 mb-1">Current Gold Rate (22K)</p>
                    <p className="text-xl font-bold text-amber-900 flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span>{goldData.currentRate}</span>
                      <span className="text-green-600 text-sm ml-2 flex items-center">
                        <TrendingUp className="h-3 w-3 mr-0.5" />
                        {goldData.weeklyChange}%
                      </span>
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-amber-700 mb-1">Yesterday's Close</p>
                    <p className="text-xl font-bold text-amber-900 flex items-center">
                      <IndianRupee className="h-4 w-4 mr-1" />
                      <span>{goldData.yesterdayClose}</span>
                    </p>
                  </div>

                  <div>
                    <p className="text-sm text-amber-700 mb-1">Weekly Change</p>
                    <p className="text-xl font-bold text-green-600 flex items-center">
                      +{goldData.weeklyChange}%
                    </p>
                  </div>
                </div>

                <Link
                  to="/products/gold-loans"
                  className="mt-6 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-amber-600 hover:bg-amber-700 transition-colors shadow-md"
                >
                  Apply for Gold Loan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              <div className="absolute top-0 right-0 opacity-20 w-40 h-40">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-amber-700">
                  <path d="M16 6V4H20V8H18M18 20H20V16H18M4 8H6V4H10V6M6 20V16H4V20H8V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 10C12.5523 10 13 9.55228 13 9C13 8.44772 12.5523 8 12 8C11.4477 8 11 8.44772 11 9C11 9.55228 11.4477 10 12 10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 16C12.5523 16 13 15.5523 13 15C13 14.4477 12.5523 14 12 14C11.4477 14 11 14.4477 11 15C11 15.5523 11.4477 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 4C12.5523 4 13 3.55228 13 3C13 2.44772 12.5523 2 12 2C11.4477 2 11 2.44772 11 3C11 3.55228 11.4477 4 12 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-xl p-6 h-full flex flex-col justify-between border border-amber-200">
              <div>
                <h4 className="text-xl font-bold text-amber-900 mb-2">Loan Calculator</h4>
                <p className="text-amber-800">Estimate your monthly payments</p>
              </div>
              <div>
                <div className="mt-4 space-y-2">
                  <div>
                    <label htmlFor="loan-amount" className="block text-sm font-medium text-amber-700">Loan Amount</label>
                    <input
                      type="number"
                      id="loan-amount"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-gray-900"
                      placeholder="Enter amount"
                      value={loanAmount}
                      onChange={handleLoanAmountChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="interest-rate" className="block text-sm font-medium text-amber-700">Interest Rate (%)</label>
                    <input
                      type="number"
                      id="interest-rate"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-gray-900"
                      placeholder="Enter rate"
                      value={interestRate}
                      onChange={handleInterestRateChange}
                    />
                  </div>
                  <div>
                    <label htmlFor="loan-period" className="block text-sm font-medium text-amber-700">Loan Tenure (months)</label>
                    <input
                      type="number"
                      id="loan-period"
                      className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-amber-500 focus:border-amber-500 text-gray-900"
                      placeholder="Enter period"
                      value={loanTenure}
                      onChange={handleLoanTenureChange}
                    />
                  </div>
                </div>
                <button onClick={calculateEMI} className="mt-4 w-full bg-amber-600 text-white py-2 rounded-lg font-medium hover:bg-amber-700 transition-colors">
                  Calculate EMI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MarketUpdates;