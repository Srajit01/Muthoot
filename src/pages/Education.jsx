import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Calculator, Award, Lightbulb, TrendingUp } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const resources = [
  {
    id: 'financial-basics',
    title: 'Financial Basics',
    description: 'Learn the fundamentals of personal finance and money management.',
    icon: BookOpen,
    topics: ['Budgeting 101', 'Savings Strategies', 'Understanding Credit'],
  },
  {
    id: 'investment-basics',
    title: 'Investment Education',
    description: 'Discover various investment options and strategies for wealth creation.',
    icon: TrendingUp,
    topics: ['Gold Investment', 'Fixed Deposits', 'Market Basics'],
  },
  {
    id: 'video-tutorials',
    title: 'Video Tutorials',
    description: 'Watch expert-led videos on various financial topics.',
    icon: Video,
    topics: ['Investment Basics', 'Loan Guidelines', 'Financial Planning'],
  },
  {
    id: 'financial-tools',
    title: 'Financial Tools',
    description: 'Access calculators and tools for better financial planning.',
    icon: Calculator,
    topics: ['Loan Calculator', 'Gold Rate Calculator', 'EMI Calculator'],
  },
  {
    id: 'expert-insights',
    title: 'Expert Insights',
    description: 'Get valuable insights from financial experts and market analysis.',
    icon: Lightbulb,
    topics: ['Market Updates', 'Expert Opinions', 'Industry Trends'],
  },
  {
    id: 'certification',
    title: 'Certification Courses',
    description: 'Enhance your financial knowledge with certified courses.',
    icon: Award,
    topics: ['Basic Finance', 'Investment Planning', 'Risk Management'],
  },
];

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Financial Education Hub
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Empower yourself with financial knowledge through our comprehensive educational resources
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {resources.map((resource, index) => (
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
                  <resource.icon className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{resource.title}</h3>
                <p className="text-gray-600 mb-6">{resource.description}</p>
                <div className="space-y-3">
                  {resource.topics.map((topic, idx) => (
                    <div key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                      {topic}
                    </div>
                  ))}
                </div>
                <button 
                  onClick={() => navigate(`/education/${resource.id}`)}
                  className="mt-8 w-full bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition-colors"
                >
                  Start Learning
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;