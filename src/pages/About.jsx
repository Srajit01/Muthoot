import React, { useState } from 'react';
import { Users, Target, Globe, Award, Heart, Sparkles, ArrowRight, Building, Users2, MapPin, Trophy } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('journey');

  const stats = [
    { icon: Building, label: 'Years of Trust', value: '80+', suffix: 'Years' },
    { icon: MapPin, label: 'Branches', value: '4500+', suffix: 'Locations' },
    { icon: Users2, label: 'Customers', value: '2M+', suffix: 'Served' },
    { icon: Trophy, label: 'States & UTs', value: '29', suffix: 'Regions' },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We put our customers at the heart of everything we do, ensuring their needs drive our innovations and services.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in all our services and operations, maintaining the highest standards of quality.',
    },
    {
      icon: Users,
      title: 'Integrity',
      description: 'We maintain unwavering integrity and transparency in all our dealings, building trust that lasts generations.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'We continuously innovate our services and processes to provide better financial solutions for our customers.',
    },
  ];

  const timeline = [
    { year: '1939', title: 'Founded', description: 'Started our journey as a small lending business' },
    { year: '1975', title: 'Expansion', description: 'Expanded operations across multiple states' },
    { year: '2011', title: 'IPO Launch', description: 'Successfully listed on BSE and NSE' },
    { year: '2023', title: 'Digital Evolution', description: 'Launched advanced digital lending platform' },
  ];

  return (
    <div className="bg-gradient-to-b from-red-50 to-red-100">  {/* Light Red Gradient */}
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-red-100 py-24"> {/* Lighter Red */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-red-200/40 to-transparent" /> {/* Even Lighter Red */}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Innovating Finance Since 1939
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"> {/* Darker Gray */}
              A legacy of trust and customer empowerment, driving financial inclusion with secure and innovative solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center"> {/* Red Accent */}
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-700">{stat.label}</div> {/* Darker Gray */}
                  <div className="text-xs text-red-600 font-medium mt-1">{stat.suffix}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Tabs */}
        <div className="flex justify-center space-x-4 mb-12 ">
          {['journey', 'values', 'impact'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 rounded-full text-base font-medium transition-all duration-300  /* Increased padding and text size */
                ${activeTab === tab
                  ? 'bg-red-100 text-red-700'  /* Red Accent */
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Journey Section */}
        {activeTab === 'journey' && (
          <div className="space-y-12">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
              <p className="text-gray-700 text-lg leading-relaxed mb-8"> {/* Darker Gray */}
                Rooted in a legacy of financial inclusion, Muthoot Finance has grown from a small lending
                business in 1939 to one of India's most trusted and innovative financial institutions.
              </p>

              <div className="grid md:grid-cols-2 gap-8">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 rounded-xl p-4 hover:bg-red-50 transition-colors duration-200" // Hover effect
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center"> {/* Red Accent */}
                      <span className="text-red-600 font-bold">{item.year}</span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-700">{item.description}</p> {/* Darker Gray */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Values Section */}
        {activeTab === 'values' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg p-6 transform hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4"> {/* Red Accent */}
                    <Icon className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p> {/* Darker Gray */}
                </div>
              );
            })}
          </div>
        )}

        {/* Impact Section */}
        {activeTab === 'impact' && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Impact</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6"> {/* Darker Gray */}
                  Driven by a vision of financial empowerment, we have positively impacted millions of lives,
                  fostering growth and prosperity across diverse communities in India and beyond.
                </p>
                <ul className="space-y-4">
                  {[
                    'Empowered 2M+ customers financially',
                    'Created employment for 25,000+ individuals',
                    'Presence in 29 states and union territories',
                    'Contributing to financial inclusion initiatives'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <ArrowRight className="h-5 w-5 text-red-600" />
                      <span className="text-gray-700">{item}</span> {/* Darker Gray */}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src="https://aniportalimages.s3.amazonaws.com/media/details/Muthoot_Finance2_Ydf9vZO.JPG"  // Example image
                    alt="Community impact"
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default About;