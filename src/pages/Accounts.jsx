import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, IndianRupee, CreditCard, Clock, CheckCircle, AlertTriangle, ArrowRight } from 'lucide-react';

const Accounts = () => {
  const [userData, setUserData] = useState(null);
  const userId = localStorage.getItem('userId'); // Retrieve user ID, adapt based on your setup

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Make an API call to fetch user account details
        const response = await fetch(`/api/users/${userId}/accounts`); // Replace with your actual API endpoint
        const data = await response.json();
        setUserData(data); // Store fetched data in state
      } catch (error) {
        console.error("Error fetching user data:", error);
        // Handle error (e.g., display an error message)
      }
    };

    if (userId) {
      fetchUserData();
    } else {
      // Handle case where user ID is not available (e.g., redirect to login)
      console.log("User ID not found. Redirect to login.");
    }
  }, [userId]);

  if (!userData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 p-6">
        <p className="text-center text-gray-600">Loading account data...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 to-emerald-50 p-6">
      <Link
        to="/dashboard"
        className="inline-flex items-center text-teal-600 hover:text-teal-700 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Dashboard
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-3xl font-bold text-teal-800 mb-6">Accounts Overview</h1>

        {/* Account Details Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Your Account</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 mb-1">Account Holder</p>
              <p className="text-lg font-medium text-gray-900">{userData.name}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Account Number</p>
              <p className="text-lg font-medium text-gray-900">{userData.accountNumber}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Account Type</p>
              <p className="text-lg font-medium text-gray-900">{userData.accountType}</p>
            </div>
            <div>
              <p className="text-gray-600 mb-1">Current Balance</p>
              <p className="text-2xl font-bold text-teal-700 flex items-center">
                <IndianRupee className="h-5 w-5 mr-1" />
                {userData.balance}
              </p>
            </div>
          </div>
        </div>

        {/* Transaction History Card */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Transaction History</h2>
          {userData.transactions && userData.transactions.length > 0 ? (
            <ul className="space-y-4">
              {userData.transactions.map((transaction) => (
                <li key={transaction.id} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900">{transaction.description}</p>
                    <p className="text-sm text-gray-500">{transaction.date}</p>
                  </div>
                  <div className={transaction.type === 'credit' ? 'text-green-600' : 'text-red-600'}>
                    {transaction.type === 'credit' ? '+' : '-'}
                    <IndianRupee className="inline-block h-4 w-4 align-middle" />
                    {transaction.amount}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">No recent transactions found.</p>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Accounts;