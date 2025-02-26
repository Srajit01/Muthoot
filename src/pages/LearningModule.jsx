import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, BookOpen, Video, Download, CheckCircle } from 'lucide-react';

const moduleData = {
  'financial-basics': {
    title: 'Financial Basics',
    description: 'Master the fundamentals of personal finance and money management.',
    modules: [
      {
        title: 'Understanding Money',
        duration: '30 mins',
        type: 'video',
        content: 'Learn about the basic concepts of money, its functions, and importance in daily life.'
      },
      {
        title: 'Budgeting Fundamentals',
        duration: '45 mins',
        type: 'interactive',
        content: 'Create and manage personal budgets effectively using proven techniques.'
      },
      {
        title: 'Savings Strategies',
        duration: '1 hour',
        type: 'video',
        content: 'Discover various savings methods and how to choose the right one for your goals.'
      }
    ],
    resources: [
      'Budgeting Template.xlsx',
      'Savings Calculator.pdf',
      'Financial Goals Worksheet.pdf'
    ]
  },
  'investment-basics': {
    title: 'Investment Education',
    description: 'Learn the fundamentals of investing and building wealth.',
    modules: [
      {
        title: 'Investment Basics',
        duration: '1 hour',
        type: 'video',
        content: 'Understanding different investment options and their characteristics.'
      },
      {
        title: 'Risk Management',
        duration: '45 mins',
        type: 'interactive',
        content: 'Learn about risk assessment and portfolio diversification.'
      },
      {
        title: 'Market Analysis',
        duration: '1.5 hours',
        type: 'video',
        content: 'Understanding market trends and analysis techniques.'
      }
    ],
    resources: [
      'Investment Risk Calculator.xlsx',
      'Market Analysis Guide.pdf',
      'Portfolio Tracker.xlsx'
    ]
  }
};

const LearningModule = () => {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const module = moduleData[moduleId]; // Removed the type assertion

  if (!module) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">Module not found</h2>
          <button
            onClick={() => navigate('/education')}
            className="mt-4 inline-flex items-center text-yellow-600 hover:text-yellow-700"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Education Hub
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
            onClick={() => navigate('/education')}
            className="inline-flex items-center text-yellow-600 hover:text-yellow-700 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Back to Education Hub
          </button>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">{module.title}</h1>
            <p className="text-xl text-gray-600">{module.description}</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {module.modules.map((lesson, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="p-6">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    {lesson.type === 'video' ? (
                      <Video className="h-6 w-6 text-yellow-600" />
                    ) : (
                      <BookOpen className="h-6 w-6 text-yellow-600" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{lesson.title}</h3>
                  <p className="text-gray-600 mb-4">{lesson.content}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{lesson.duration}</span>
                    <button className="bg-yellow-600 text-white px-4 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                      Start Lesson
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-6">Additional Resources</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {module.resources.map((resource, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <span className="font-medium">{resource}</span>
                  <button className="text-yellow-600 hover:text-yellow-700">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-8 flex justify-center"
          >
            <div className="bg-green-50 text-green-700 px-6 py-3 rounded-lg inline-flex items-center">
              <CheckCircle className="h-5 w-5 mr-2" />
              Your progress is automatically saved
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default LearningModule;