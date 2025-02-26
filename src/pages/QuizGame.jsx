import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, Lightbulb, Coins, BadgeCheck, XCircle, AlertTriangle } from 'lucide-react';

const FinanceQuizGame = () => {
  const navigate = useNavigate();

  const [gameList, setGameList] = useState([
    { id: 1, name: 'Budgeting Basics', description: 'Learn to create a budget and stick to it.', route: '/game/budgeting' },
    { id: 2, name: 'Saving Goals', description: 'Set goals and learn strategies.', route: '/game/savings' },
    { id: 3, name: 'Investing 101', description: 'Explore the world of investments.', route: '/game/investing' },
    { id: 4, name: 'Credit Score Challenge', description: 'Boost your credit score.', route: '/game/credit' },
    { id: 5, name: 'Debt Management', description: 'Learn how to manage debt.', route: '/game/debt' },
    { id: 6, name: 'Loan Terminology', description: 'Test your knowledge on loan terms.', route: '/game/loan-terms' }, // New Game
    { id: 7, name: 'Retirement Planning', description: 'Plan for your future.', route: '/game/retirement' }, // New Game
    { id: 8, name: 'Tax Savings', description: 'Learn how to save on taxes.', route: '/game/tax-savings' }, // New Game
    { id: 9, name: 'Fraud Prevention', description: 'Learn how to prevent fraud.', route: '/game/fraud' },  // New Game
  ]);

  useEffect(() => {
    document.title = 'Finance Quiz Game';
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-6">
      <Link
        to="/"
        className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6"
      >
        <ChevronLeft className="h-5 w-5 mr-1" />
        Back to Dashboard
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-5xl mx-auto"
      >
        <h1 className="text-4xl font-extrabold text-indigo-800 mb-8 text-center">Finance Quiz Game</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">Test your financial knowledge and earn rewards!</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gameList.map((game) => (
            <motion.div
              key={game.id}
              whileHover={{ y: -5, boxShadow: '0 5px 15px rgba(0, 0, 0, 0.15)' }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-6 h-64 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{game.name}</h3>
                <p className="text-gray-600 leading-relaxed">{game.description}</p>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-indigo-500 flex items-center">
                  <Lightbulb className="h-4 w-4 mr-1" />
                  Learn More
                </span>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                  className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-600 transition-colors"
                  onClick={() => navigate(game.route)} // Use navigate for correct page change
                >
                  Play Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default FinanceQuizGame;