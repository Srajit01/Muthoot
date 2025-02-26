import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Clock, Coins } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [
        "/plant.png", // Plant image - MUST be in public/images folder
        "/gold.jpg",   // Example -  MUST be in public/images folder
        "/R.jpeg",   // Example -  MUST be in public/images folder
        "/sav.jpg",   // Example -  MUST be in public/images folder
        "/fam.jpg",   // Example -  MUST be in public/images folder

    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000); // Change image every 10 seconds

        return () => clearInterval(intervalId); // Cleanup on unmount
    }, [images.length]);

    return (
        <div className="relative bg-gradient-to-br from-yellow-50 to-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-transparent sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <motion.div
                            initial={{opacity: 0, y: 50}}
                            animate={{opacity: 1, y: 0}}
                            transition={{duration: 0.7, ease: "easeInOut"}}
                            className="sm:text-center lg:text-left"
                        >
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                                <span className="block xl:inline">Empowering Your Financial Journey</span>
                                <span className="block text-yellow-600 xl:inline"> with Confidence</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-700 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                                Secure, transparent gold loan services tailored for the ambitious generation.
                            </p>
                            <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-md shadow">
                                    <Link
                                        to="/dashboard"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        Explore Dashboard
                                        <ArrowRight className="ml-2 h-5 w-5"/>
                                    </Link>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <Link
                                        to="/about"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 md:py-4 md:text-lg md:px-10 transition-colors"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
    <motion.div
      whileHover={{ scale: 1.1, y: -3, transition: { duration: 0.3 } }} /* Added y-axis translation */
      className="flex items-center space-x-3 bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl shadow-md border border-yellow-200"  /* Gradient and border */
    >
      <Shield className="h-8 w-8 text-yellow-700" />  
      <div className="flex flex-col">
        <span className="text-gray-900 font-semibold">Secure & Reliable</span>
        <span className="text-gray-600 text-sm">Your Gold is Safe</span>
      </div>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.1, y: -3, transition: { duration: 0.3 } }} /* Added y-axis translation */
      className="flex items-center space-x-3 bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl shadow-md border border-yellow-200"  /* Gradient and border */
    >
      <Clock className="h-8 w-8 text-yellow-700" /> 
      <div className="flex flex-col">
        <span className="text-gray-900 font-semibold">Fast Approval</span>
        <span className="text-gray-600 text-sm">Get Funds Quickly</span>
      </div>
    </motion.div>
    <motion.div
      whileHover={{ scale: 1.1, y: -3, transition: { duration: 0.3 } }} /* Added y-axis translation */
      className="flex items-center space-x-3 bg-gradient-to-br from-yellow-50 to-yellow-100 p-4 rounded-xl shadow-md border border-yellow-200"  /* Gradient and border */
    >
      <Coins className="h-8 w-8 text-yellow-700" />  
      <div className="flex flex-col">
        <span className="text-gray-900 font-semibold">Competitive Rates</span>
        <span className="text-gray-600 text-sm">Affordable Options</span>
      </div>
    </motion.div>
  </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <motion.img
                    key={images[currentImageIndex]}
                    src={images[currentImageIndex]}
                    alt="Youth-Focused Finance"
                    className="h-56 w-full object-contain object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    exit={{opacity: 0}}
                    transition={{duration: 1, ease: "easeInOut"}}
                />
            </div>
            {/* Footer */}
            <footer className="bg-gray-900 text-white py-8 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
                        <p className="text-gray-400">
                            123 Finance Street<br/>
                            New York, NY 10001<br/>
                            Phone: (123) 456-7890<br/>
                            Email: info@finance.com
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link to="/products" className="text-gray-400 hover:text-white">Products</Link></li>
                            <li><Link to="/branches" className="text-gray-400 hover:text-white">Branches</Link></li>
                            <li><Link to="/education" className="text-gray-400 hover:text-white">Education</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                            <li><Link to="/dashboard" className="text-gray-400 hover:text-white">Dashboard</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter Signup */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Subscribe to Our Newsletter</h4>
                        <p className="text-gray-400 mb-4">Stay up-to-date with the latest financial news and exclusive offers.</p>
                        <div className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="bg-gray-700 text-gray-300 rounded-l-md px-4 py-2 focus:outline-none"
                            />
                            <button className="bg-yellow-600 text-white px-4 py-2 rounded-r-md hover:bg-yellow-700 transition-colors">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>

                {/* Copyright Notice */}
                <div className="mt-8 text-center text-gray-500">
                    © {new Date().getFullYear()} Your Finance Company. All rights reserved.
                </div>
            </footer>
        </div>
    );
};

export default Hero;