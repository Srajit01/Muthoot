import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Search, BarChart, Lightbulb, Users2, MessageSquare, CheckCircle2 } from 'lucide-react';

const YouthEngagementAnalysis = () => {
  return (
    <div className="py-12 bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Youth Engagement Analysis
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding and connecting with the next generation of financial leaders.
          </p>
        </motion.div>

        <div className="space-y-12">
          {/* Current Branch Experience Analysis */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Brain className="h-10 w-10 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Analyze Existing Branch Experience
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We start by thoroughly examining the existing branch experience, identifying friction points,
              and assessing what's currently working for younger customers.
            </p>

            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Review current branch layout, design, and atmosphere</li>
              <li>Analyze customer service interactions and wait times</li>
              <li>Evaluate the use of technology within branches (e.g., kiosks, digital displays)</li>
              <li>Gather feedback from staff members on youth customer behavior</li>
            </ul>
          </motion.div>

          {/* Identify Youth Expectations and Preferences */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Search className="h-10 w-10 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Discover Youth Preferences
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We need to dive deep into understanding what younger customers expect from a modern financial institution.
              This involves active listening, research, and engaging directly with the target audience.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Conduct surveys and polls targeting the 18-35 age group</li>
              <li>Organize focus groups and interviews to gather qualitative data</li>
              <li>Analyze online behavior, social media trends, and financial habits</li>
              <li>Review relevant market research on youth consumer behavior</li>
            </ul>
          </motion.div>

          {/* Identify Key Gaps and Opportunities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <BarChart className="h-10 w-10 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Identify Gaps and Opportunities
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Once data collection is complete, we analyze the results to identify the gaps between what youth expect
              and what the existing branch experience provides. This reveals key areas for improvement and innovation.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Identify disconnects between youth expectations and current offerings</li>
              <li>Determine which aspects of the branch experience resonate most with youth</li>
              <li>Highlight unmet needs and areas where we can create a unique advantage</li>
              <li>Outline potential areas for technology integration</li>
            </ul>
          </motion.div>

          {/* Align Elements to Youth Preferences and Habits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <Lightbulb className="h-10 w-10 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Align for Youth Engagement
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Now we use the insight to create a youth-centric branch environment that is attractive and engaging.

            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Incorporate modern design elements, such as vibrant colors, comfortable seating, and collaborative spaces</li>
              <li>Integrate technology seamlessly, offering digital tools and interactive experiences</li>
              <li>Provide educational workshops, financial literacy sessions, and networking opportunities</li>
              <li>Create a welcoming and inclusive atmosphere that reflects the diversity of the community</li>
            </ul>
          </motion.div>

          {/* Ongoing Feedback and Iteration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
            className="bg-white rounded-2xl shadow-lg p-8"
          >
            <div className="flex items-center space-x-4 mb-6">
              <MessageSquare className="h-10 w-10 text-blue-600" />
              <h3 className="text-2xl font-semibold text-gray-900">
                Gather On-going Feedback and Iteration
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              Continuous feedback is essential.
            </p>
            <ul className="list-disc pl-6 text-gray-600 space-y-2">
              <li>Regular surveys and feedback forms on site or digital</li>
              <li>Staff training on recognizing and resolving concerns from youth</li>
            </ul>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default YouthEngagementAnalysis;