import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Mail, Search } from 'lucide-react';

const BranchCard = ({ branch, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-300"
    >
      <div className="h-48 overflow-hidden relative">
        <motion.img
          initial={{ scale: 1.2 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          src={branch.image}
          alt={branch.city}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent">
          <div className="absolute bottom-4 left-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white"
            >
              <span className="px-2 py-1 bg-yellow-600/90 rounded-full text-xs font-medium">
                {branch.state}
              </span>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">{branch.city}</h3>
        <div className="space-y-3">
          <div className="flex items-start text-gray-600">
            <MapPin className="h-5 w-5 mr-3 text-yellow-600 shrink-0 mt-1" />
            <span className="text-sm">{branch.address}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Phone className="h-5 w-5 mr-3 text-yellow-600 shrink-0" />
            <span className="text-sm">{branch.phone}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Mail className="h-5 w-5 mr-3 text-yellow-600 shrink-0" />
            <span className="text-sm">{branch.email}</span>
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-5 w-5 mr-3 text-yellow-600 shrink-0" />
            <span className="text-sm">{branch.hours}</span>
          </div>
        </div>
        <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-6 w-full bg-yellow-600 text-white py-3 px-6 rounded-lg hover:bg-yellow-700 transition-colors flex items-center justify-center gap-2 font-medium"
        >
          <MapPin className="h-4 w-4" />
          Get Directions
        </motion.button>
      </div>
    </motion.div>
  );
};

const SearchSection = ({ setSearchQuery }) => {
  return (
    <div className="relative max-w-xl mx-auto mb-12">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
        {/* Replaced Shadcn Input with standard HTML input */}
        <input
          type="text"
          placeholder="Search by city or state..."
          className="pl-10 pr-4 py-3 w-full rounded-xl border-gray-200 focus:border-yellow-600 focus:ring-yellow-600 outline-none"
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </div>
  );
};

const Branches = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const branches = [
    {
      city: 'Ernakulam',
      state: 'Kerala',
      address: 'Muthoot Chambers, Opposite Saritha Theatre Complex, Banerji Road, Ernakulam, Kerala 682018',
      phone: '0484 239 4712',
      email: 'ernakulam@muthootfinance.com',
      hours: 'Mon-Sat: 9:30 AM - 5:30 PM',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2940&auto=format&fit=crop'
    },
    {
      city: 'Thiruvananthapuram',
      state: 'Kerala',
      address: 'TC 25/173(1), Muthoot Building, Pulimoodu Junction, Thiruvananthapuram, Kerala 695001',
      phone: '0471 233 6233',
      email: 'trivandrum@muthootfinance.com',
      hours: 'Mon-Sat: 9:30 AM - 5:30 PM',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2940&auto=format&fit=crop'
    },
    {
      city: 'Mumbai',
      state: 'Maharashtra',
      address: 'Muthoot Chambers, Sastri Nagar, Mulund West, Mumbai, Maharashtra 400080',
      phone: '022 2167 2603',
      email: 'mumbai@muthootfinance.com',
      hours: 'Mon-Sat: 9:30 AM - 5:30 PM',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2940&auto=format&fit=crop'
    },
    {
      city: 'Delhi',
      state: 'Delhi',
      address: 'A-21, Connaught Place, New Delhi, Delhi 110001',
      phone: '011 4374 9999',
      email: 'delhi@muthootfinance.com',
      hours: 'Mon-Sat: 9:30 AM - 5:30 PM',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?q=80&w=2940&auto=format&fit=crop'
    },
    {
      city: 'Bengaluru',
      state: 'Karnataka',
      address: 'No. 49, 1st Floor, Brigade Road, Bengaluru, Karnataka 560001',
      phone: '080 4112 1011',
      email: 'bangalore@muthootfinance.com',
      hours: 'Mon-Sat: 9:30 AM - 5:30 PM',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=2940&auto=format&fit=crop'
    },
    {
      city: 'Chennai',
      state: 'Tamil Nadu',
      address: 'Spencer Plaza, 769, Anna Salai, Chennai, Tamil Nadu 600002',
      phone: '044 2849 7040',
      email: 'chennai@muthootfinance.com',
      hours: 'Mon-Sat: 9:30 AM - 5:30 PM',
      image: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?q=80&w=2940&auto=format&fit=crop'
    }
  ];

  const filteredBranches = branches.filter(branch => 
    branch.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
    branch.state.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="px-4 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium mb-4 inline-block">
            Branch Locator
          </span>
          <h1 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Find a Muthoot Finance Branch
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Locate our branches across India and experience our world-class financial services
          </p>
        </motion.div>

        <SearchSection setSearchQuery={setSearchQuery} />

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto"
        >
          {filteredBranches.map((branch, index) => (
            <BranchCard key={branch.city} branch={branch} index={index} />
          ))}
        </motion.div>

        {filteredBranches.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 text-lg">No branches found matching your search criteria.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Branches;