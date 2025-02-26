import React from 'react';
import { motion } from 'framer-motion';
import { Coins, Gem, Wallet, CreditCard, PiggyBank, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const products = [
  {
    icon: Coins,
    id: 'gold-loans',
    title: 'Gold Loans',
    description: 'Quick and secure loans against your gold jewelry with competitive interest rates.',
    features: ['Instant Valuation', 'Quick Disbursement', 'Flexible Repayment'],
  },
  {
    icon: Gem,
    id: 'gold-investments',
    title: 'Gold Investments',
    description: 'Invest in gold through various schemes and secure your financial future.',
    features: ['Digital Gold', 'Gold Bonds', 'Gold Savings Plans'],
  },
  {
    icon: Wallet,
    id: 'personal-loans',
    title: 'Personal Loans',
    description: 'Meet your personal financial needs with our hassle-free personal loans.',
    features: ['Minimal Documentation', 'Quick Approval', 'Competitive Rates'],
  },
  {
    icon: CreditCard,
    id: 'business-loans',
    title: 'Business Loans',
    description: 'Empower your business growth with our tailored financial solutions.',
    features: ['Flexible Terms', 'Higher Limits', 'Business Advisory'],
  },
  {
    icon: PiggyBank,
    id: 'fixed-deposits',
    title: 'Fixed Deposits',
    description: 'Grow your savings with our high-yield fixed deposit schemes.',
    features: ['Attractive Returns', 'Flexible Tenure', 'Senior Citizen Benefits'],
  },
  {
    icon: Shield,
    id: 'insurance',
    title: 'Insurance',
    description: 'Protect yourself and your loved ones with our comprehensive insurance plans.',
    features: ['Life Insurance', 'Health Coverage', 'Asset Protection'],
  },
];

const Products = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Our Financial Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our range of financial products designed to help you achieve your goals
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <product.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.title}</h3>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <ul className="space-y-2">
                  {product.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => navigate(`/products/${product.id}`)}
                  className="mt-8 w-full bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Learn More
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;