import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  MessageCircle,
  Headphones,
  TrendingUp,
  Gift,
  Gamepad2,
  Globe,
  Lightbulb,
  IndianRupee,
  ArrowRight,
  Mic,
  BarChart4,
  Users,
  X,
  Check,
  ChevronLeft
} from 'lucide-react';

const Dashboard = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-extrabold text-indigo-900 tracking-tight sm:text-5xl md:text-6xl mb-4">
            Muthoot Finance
          </h1>
          <h2 className="text-2xl font-bold text-indigo-700 tracking-tight sm:text-3xl">
            The Future of Banking
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Experience next-generation banking with AI assistance, immersive experiences, and gamified financial learning
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Link to="/quick-loan" className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center">
            <IndianRupee className="mr-2 h-5 w-5" />
            Quick Gold Loan
          </Link>
          <Link to="/chatbot" className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center">
            <MessageCircle className="mr-2 h-5 w-5" />
            Customer Support
          </Link>
          <Link to="/accounts" className="px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all flex items-center">
            <BarChart4 className="mr-2 h-5 w-5" />
            View Accounts
          </Link>
        </motion.div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* AI Chatbot */}
          <motion.div
      whileHover={{
        y: -5,
        boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.1), 0 8px 10px -6px rgba(59, 130, 246, 0.1)',
      }}
      transition={{ duration: 0.2 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden"
    >
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 px-6 py-4">
        <h3 className="text-xl font-bold text-white flex items-center">
          <MessageCircle className="h-6 w-6 mr-2" />
          AI Banking Assistant
        </h3>
      </div>
      <div className="p-6">
        <div className="space-y-4 mb-4">
          <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
            <p className="text-blue-800 text-sm">Welcome! How can I assist you today?</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto">
            <p className="text-gray-800 text-sm">I need help with my account.</p>
          </div>
          <div className="bg-blue-50 rounded-lg p-3 max-w-[80%]">
            <p className="text-blue-800 text-sm">I can help with that. Would you like to check your balance, view recent transactions, or transfer funds?</p>
          </div>
          <div className="bg-gray-100 rounded-lg p-3 max-w-[80%] ml-auto">
            <p className="text-gray-800 text-sm">Check my balance</p>
          </div>
        </div>

        {/* Moved Button Outside Flex container  */}
        <Link
          to="/chatbot" // Replace with the actual path to your chatbot page
          className="block w-full bg-blue-500 text-white p-3 rounded-lg text-center hover:bg-blue-600 transition-colors"
        >
         Ask your Doubts 
        </Link>
      </div>
    </motion.div>
          {/* Voice Banking */}
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.1), 0 8px 10px -6px rgba(16, 185, 129, 0.1)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Mic className="h-6 w-6 mr-2" />
                Voice Banking
              </h3>
            </div>
            <div className="p-6">
              <div className="text-center py-6">
                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-emerald-200 transition-colors cursor-pointer">
                  <Mic className="h-12 w-12 text-emerald-600" />
                </div>
                <p className="text-gray-600 mb-2">Tap to speak your commands</p>
                <p className="text-sm text-gray-500">Try saying: "Check my balance" or "Transfer money"</p>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 mt-4">
                <h4 className="font-semibold text-emerald-800 mb-2">Current Balance</h4>
                <p className="text-2xl font-bold text-emerald-900 flex items-center">
                  <IndianRupee className="h-5 w-5 mr-1" />
                  <span>50,000</span>
                </p>
                <p className="text-xs text-emerald-700 mt-1">Last updated: Today, 10:30 AM</p>
              </div>
            </div>
          </motion.div>

          {/* VR Loan Consultation */}
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(139, 92, 246, 0.1), 0 8px 10px -6px rgba(139, 92, 246, 0.1)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Headphones className="h-6 w-6 mr-2" />
                VR Loan Consultation
              </h3>
            </div>
            <div className="p-6">
              <div className="relative h-40 mb-4 rounded-lg overflow-hidden">
                <img
                  src="https://source.unsplash.com/400x200/?virtual,reality,loan"
                  alt="VR Consultation Preview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                  <div className="w-16 h-16 rounded-full bg-white bg-opacity-20 flex items-center justify-center backdrop-blur-sm">
                    <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">Experience a one-on-one consultation with our loan officers in a virtual environment.</p>
              <Link
                to="/vr-consultation"
                className="block w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-3 rounded-lg text-center font-semibold hover:from-purple-600 hover:to-purple-700 transition-colors"
              >
                Start VR Experience
              </Link>
            </div>
          </motion.div>

          {/* Personal Finance Dashboard */}
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(245, 158, 11, 0.1), 0 8px 10px -6px rgba(245, 158, 11, 0.1)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-amber-500 to-amber-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Lightbulb className="h-6 w-6 mr-2" />
                Personal Finance
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-gray-700 font-semibold mb-2">This Month's Spending</h4>
                <div className="flex items-center justify-between">
                  <p className="text-2xl font-bold text-gray-900 flex items-center">
                    <IndianRupee className="h-5 w-5 mr-1" />
                    <span>11,000</span>
                  </p>
                  <span className="px-2 py-1 bg-amber-100 text-amber-800 rounded-md text-sm">-12% vs last month</span>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Food & Groceries</span>
                    <span className="font-medium text-gray-900">₹4,500</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '40%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Transportation</span>
                    <span className="font-medium text-gray-900">₹2,800</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '25%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Entertainment</span>
                    <span className="font-medium text-gray-900">₹1,900</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-amber-500 h-2 rounded-full" style={{ width: '17%' }}></div>
                  </div>
                </div>
              </div>

              <div className="p-3 bg-green-50 border border-green-200 rounded-lg mb-4">
                <p className="text-green-800 text-sm flex items-start">
                  <Lightbulb className="h-4 w-4 mr-1 mt-0.5 flex-shrink-0" />
                  <span>Save <span className="font-semibold">₹2,000</span> more this month by reducing dining out expenses.</span>
                </p>
              </div>

              <Link to="/financial-dashboard" className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white py-2 rounded-lg text-center font-semibold hover:from-amber-600 hover:to-amber-700 transition-colors">
                Full Financial Dashboard
              </Link>
            </div>
          </motion.div>

          {/* Youth Offers & Rewards */}
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(239, 68, 68, 0.1), 0 8px 10px -6px rgba(239, 68, 68, 0.1)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-rose-500 to-rose-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Gift className="h-6 w-6 mr-2" />
                Youth Offers & Rewards
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-4 mb-4">
                <div className="bg-rose-50 rounded-lg p-4 border-l-4 border-rose-500">
                  <h4 className="font-semibold text-rose-900 mb-1">5% Cashback on Gold Loans</h4>
                  <p className="text-rose-700 text-sm">For students and young professionals under 30</p>
                  <button className="mt-2 px-3 py-1 bg-rose-100 text-rose-800 rounded text-sm hover:bg-rose-200 transition-colors">
                    Learn More
                  </button>
                </div>

                <div className="bg-blue-50 rounded-lg p-4 border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-1">Loyalty Points Program</h4>
                  <p className="text-blue-700 text-sm">Earn points on every transaction</p>
                  <div className="mt-2 flex items-center">
                    <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                      <div className="bg-blue-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                    </div>
                    <span className="text-xs font-medium text-blue-900">650/1000</span>
                  </div>
                </div>
              </div>

              <Link to="/youth-offers" className="block w-full bg-gradient-to-r from-rose-500 to-rose-600 text-white py-2 rounded-lg text-center font-semibold hover:from-rose-600 hover:to-rose-700 transition-colors">
                View All Offers
              </Link>
            </div>
          </motion.div>

          {/* Finance Quiz Game */}
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.1), 0 8px 10px -6px rgba(99, 102, 241, 0.1)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden"
          >
            <div className="bg-gradient-to-r from-indigo-500 to-indigo-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Gamepad2 className="h-6 w-6 mr-2" />
                Finance Quiz Game
              </h3>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-indigo-800 font-semibold">Q</span>
                  </div>
                  <h4 className="font-semibold text-indigo-900">What is the safest way to invest money?</h4>
                </div>

                <div className="space-y-2 mt-3">
                  <button className="w-full py-2 px-4 bg-green-100 text-green-800 rounded-lg flex items-center justify-between">
                    <span>Fixed Deposit</span>
                    <Check className="h-5 w-5" />
                  </button>

                  <button className="w-full py-2 px-4 bg-red-100 text-red-800 rounded-lg flex items-center justify-between">
                    <span>Cryptocurrency</span>
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="mt-4 bg-indigo-50 p-3 rounded-lg flex items-center justify-between">
                  <div>
                    <p className="text-sm text-indigo-800 font-semibold">Your Score:</p>
                    <p className="text-2xl font-bold text-indigo-900">50</p>
                  </div>
                  <div className="w-16 h-16 relative">
                    <svg viewBox="0 0 36 36" className="w-16 h-16 transform -rotate-90">
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E0E7FF"
                        strokeWidth="2"
                      />
                      <path
                        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#6366F1"
                        strokeWidth="2"
                        strokeDasharray="50, 100"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-indigo-900">5/10</div>
                  </div>
                </div>
              </div>

              <Link to="/quiz-game" className="block w-full bg-gradient-to-r from-indigo-500 to-indigo-600 text-white py-2 rounded-lg text-center font-semibold hover:from-indigo-600 hover:to-indigo-700 transition-colors">
                Continue Playing
              </Link>
            </div>
          </motion.div>

          

          {/* Community Hub */}
          <motion.div
            whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(20, 184, 166, 0.1), 0 8px 10px -6px rgba(20, 184, 166, 0.1)' }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden lg:col-span-2"
          >
            <div className="bg-gradient-to-r from-teal-500 to-teal-600 px-6 py-4">
              <h3 className="text-xl font-bold text-white flex items-center">
                <Users className="h-6 w-6 mr-2" />
                Community Hub
              </h3>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Upcoming Events</h4>
                  <div className="space-y-3">
                    <div className="flex">
                      <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded flex flex-col items-center justify-center mr-3">
                        <span className="text-teal-800 font-bold">15</span>
                        <span className="text-teal-700 text-sm">Feb</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Investment Masterclass</h5>
                        <p className="text-sm text-gray-600">Learn strategies from expert advisors</p>
                        <button className="mt-1 text-teal-600 text-sm hover:text-teal-800 font-medium">Register Now</button>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded flex flex-col items-center justify-center mr-3">
                        <span className="text-teal-800 font-bold">05</span>
                        <span className="text-teal-700 text-sm">Mar</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Gold Loan Benefits Webinar</h5>
                        <p className="text-sm text-gray-600">Understanding gold value in modern markets</p>
                        <button className="mt-1 text-teal-600 text-sm hover:text-teal-800 font-medium">Set Reminder</button>
                      </div>
                    </div>

                    <div className="flex">
                      <div className="flex-shrink-0 w-16 h-16 bg-teal-100 rounded flex flex-col items-center justify-center mr-3">
                        <span className="text-teal-800 font-bold">20</span>
                        <span className="text-teal-700 text-sm">Mar</span>
                      </div>
                      <div>
                        <h5 className="font-medium text-gray-900">Smart Budgeting Workshop</h5>
                        <p className="text-sm text-gray-600">For young professionals and students</p>
                        <button className="mt-1 text-teal-600 text-sm hover:text-teal-800 font-medium">Register Now</button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Community Forum Highlights</h4>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-4">
                    <div>
                      <div className="flex items-start mb-1">
                        <div className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-teal-700 font-medium">A</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">How to start investing with ₹500/month?</h5>
                          <p className="text-sm text-gray-600">Posted by Anika S. • 3d ago</p>
                        </div>
                      </div>
                      <div className="pl-10">
                        <p className="text-sm text-gray-700 mb-2">I'm a college student looking to start investing with a small amount. What are my options?</p>
                        <p className="text-xs text-gray-500">12 replies • 150 views</p>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-start mb-1">
                        <div className="w-8 h-8 bg-teal-200 rounded-full flex items-center justify-center mr-2 flex-shrink-0">
                          <span className="text-teal-700 font-medium">R</span>
                        </div>
                        <div>
                          <h5 className="font-medium text-gray-900">Gold loans vs personal loans - pros & cons</h5>
                          <p className="text-sm text-gray-600">Posted by Rahul M. • 1w ago</p>
                        </div>
                      </div>
                      <div className="pl-10">
                        <p className="text-sm text-gray-700 mb-2">I need to fund my startup. Which loan option makes more sense?</p>
                        <p className="text-xs text-gray-500">24 replies • 320 views</p>
                      </div>
                    </div>
                  </div>

                  <Link to="/community" className="block w-full bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 rounded-lg text-center font-semibold mt-4 hover:from-teal-600 hover:to-teal-700 transition-colors">
                    Join Community
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
