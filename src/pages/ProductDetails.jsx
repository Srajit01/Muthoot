import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Check, AlertCircle, Calculator, FileText, Clock } from 'lucide-react';

const productData = {
  'gold-loans': {
    title: 'Gold Loans',
    description: 'Get instant loans against your gold jewelry with competitive interest rates and flexible repayment options.',
    interestRate: '7.50% - 15.50%',
    loanAmount: '₹10,000 - ₹50,00,000',
    tenure: '3 months - 24 months',
    processingFee: '0.25% - 1%',
    features: [
      'Instant loan disbursement',
      'Minimal documentation required',
      'No income proof needed',
      'Flexible repayment options',
      'Transparent pricing',
      'Safe and secure storage'
    ],
    requirements: [
      'Gold jewelry (18-22 karat)',
      'Identity proof (Aadhar/PAN)',
      'Address proof',
      'Recent photograph',
      'Bank account details'
    ],
    process: [
      'Visit nearest branch with gold and documents',
      'Gold purity assessment',
      'Loan amount calculation',
      'Documentation completion',
      'Instant disbursement'
    ]
  },
  'fixed-deposits': {
    title: 'Fixed Deposits',
    description: 'Secure your savings with our high-yield fixed deposit schemes offering attractive interest rates.',
    interestRate: '6.85% - 7.85%',
    minAmount: '₹5,000',
    tenure: '7 days - 10 years',
    features: [
      'Higher interest rates for senior citizens',
      'Quarterly interest payout option',
      'Auto-renewal facility',
      'Loan against FD available',
      'Online account access',
      'TDS as per IT rules'
    ],
    requirements: [
      'Identity proof (Aadhar/PAN)',
      'Address proof',
      'Recent photograph',
      'Bank account details'
    ],
    schemes: [
      'Regular FD',
      'Tax Saver FD',
      'Senior Citizen FD',
      'Cumulative FD'
    ]
  }
};

const ProductDetails = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const product = productData[productId]; // Removed type assertion

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Product not found</h2>
          <button
            onClick={() => navigate('/products')}
            className="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={() => navigate('/products')}
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Products
          </button>

          <h1 className="text-4xl font-extrabold text-gray-900 mb-8">{product.title}</h1>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <Clock className="h-6 w-6 text-yellow-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Interest Rate</h3>
              <p className="text-2xl font-bold text-yellow-600">{product.interestRate}</p>
            </div>
            {product.loanAmount && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <Calculator className="h-6 w-6 text-yellow-600 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Loan Amount</h3>
                <p className="text-2xl font-bold text-yellow-600">{product.loanAmount}</p>
              </div>
            )}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <FileText className="h-6 w-6 text-yellow-600 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Tenure</h3>
              <p className="text-2xl font-bold text-yellow-600">{product.tenure}</p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-4">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-bold mb-6">Requirements</h2>
              <ul className="space-y-4">
                {product.requirements.map((requirement, index) => (
                  <li key={index} className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-yellow-600 mr-3 mt-1" />
                    <span>{requirement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8 text-center"
          >
            <Link to="/gold-loan-application" className="bg-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-yellow-700 transition-colors">
              Apply Now
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductDetails;