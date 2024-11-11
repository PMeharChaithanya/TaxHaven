import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';

export const Home: React.FC = () => {
  const [taxCollection, setTaxCollection] = useState(3250000);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTaxCollection(prev => prev + Math.floor(Math.random() * 1000));
    }, 1000);
    
    return () => clearInterval(interval);
  }, []);

  const statistics = [
    {
      value: 325000,
      label: 'Direct Tax Collection',
      prefix: '₹',
      suffix: 'Cr',
      increment: 50,
      description: 'FY 2023-24'
    },
    {
      value: 7.2,
      label: 'Tax Returns Filed',
      suffix: 'Cr',
      increment: 0.01,
      description: 'As of March 2024'
    },
    {
      value: 42000,
      label: 'Average Tax Saved',
      prefix: '₹',
      increment: 100,
      description: 'Per Return Filed'
    },
    {
      value: 15,
      label: 'Tax Sections Covered',
      suffix: '+',
      increment: 0,
      description: 'Including Latest Updates'
    }
  ];

  const features = [
    {
      title: 'Smart Tax Calculator',
      description: 'Advanced algorithms to maximize your savings',
      icon: '🧮'
    },
    {
      title: 'Legal Explorer',
      description: 'Navigate tax laws with confidence',
      icon: '⚖️'
    },
    {
      title: 'Real-time Updates',
      description: 'Stay current with tax law changes',
      icon: '🔄'
    },
    {
      title: 'Secure & Private',
      description: 'Your data is encrypted and protected',
      icon: '🔒'
    }
  ];

  const whyFreePoints = [
    {
      title: 'Community First',
      description: 'We believe everyone deserves access to quality tax planning',
      icon: '🤝'
    },
    {
      title: 'No Hidden Costs',
      description: 'Completely free calculator and tax insights - no strings attached',
      icon: '💎'
    },
    {
      title: 'Transparent Service',
      description: 'Clear, accurate calculations with detailed breakdowns',
      icon: '📊'
    },
    {
      title: 'Regular Updates',
      description: 'Always up-to-date with latest tax laws and regulations',
      icon: '🔄'
    }
  ];

  const trustIndicators = [
    { number: '100%', label: 'Free Forever' },
    { number: '50+', label: 'Tax Rules Covered' },
    { number: '24/7', label: 'Community Support' },
    { number: '0₹', label: 'No Hidden Charges' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-blue-50 via-white to-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center space-y-8"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-500">
                Smart Tax Planning
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Save more with AI-powered tax optimization and real-time insights
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/business"
                className={`
                  relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg
                  bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700
                  text-white overflow-hidden w-full sm:w-auto
                  shadow-[0_5px_15px_rgba(59,130,246,0.35)]
                  transition-all duration-500 ease-out
                  hover:shadow-[0_8px_25px_rgba(59,130,246,0.45)]
                  hover:translate-y-[-2px]
                  before:absolute before:top-0 before:left-0 before:w-full before:h-full
                  before:bg-gradient-to-r before:from-blue-600 before:via-blue-700 before:to-blue-800
                  before:origin-left before:scale-x-0 before:transition-transform before:duration-500
                  hover:before:scale-x-100 before:rounded-xl
                  group
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-500 group-hover:translate-x-1">
                  Business Calculator
                  <div className="relative w-6 h-6 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:translate-x-full">→</div>
                    <div className="absolute inset-0 transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0">→</div>
                  </div>
                </span>
              </Link>
              
              <Link
                to="/salaried"
                className={`
                  relative px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg
                  bg-white text-green-500 overflow-hidden w-full sm:w-auto
                  border-2 border-green-500
                  shadow-[0_5px_15px_rgba(34,197,94,0.15)]
                  transition-all duration-500 ease-out
                  hover:shadow-[0_8px_25px_rgba(34,197,94,0.25)]
                  hover:translate-y-[-2px]
                  before:absolute before:top-0 before:left-0 before:w-full before:h-full
                  before:bg-gradient-to-r before:from-green-500 before:to-green-600
                  before:origin-left before:scale-x-0 before:transition-transform before:duration-500
                  hover:before:scale-x-100 before:rounded-xl
                  hover:text-white hover:border-transparent
                  group
                `}
              >
                <span className="relative z-10 flex items-center justify-center gap-2 transition-transform duration-500 group-hover:translate-x-1">
                  Salaried Calculator
                  <div className="relative w-6 h-6 overflow-hidden">
                    <div className="absolute inset-0 transition-transform duration-500 group-hover:translate-x-full">→</div>
                    <div className="absolute inset-0 transition-transform duration-500 translate-x-[-100%] group-hover:translate-x-0">→</div>
                  </div>
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-blue-100"
              >
                <div className="flex flex-col space-y-2">
                  <div className="text-4xl font-bold text-blue-600 tabular-nums tracking-tight">
                    {stat.prefix}
                    <CountUp
                      start={stat.value - (stat.increment * 50)}
                      end={stat.value}
                      duration={2}
                      separator=","
                      decimal="."
                      decimals={stat.increment < 1 ? 1 : 0}
                      useEasing={true}
                      formattingFn={(value) => value.toLocaleString()}
                    />
                    {stat.suffix}
                  </div>
                  <h3 className="text-gray-800 font-medium text-lg">{stat.label}</h3>
                  <p className="text-gray-500 text-sm">{stat.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Is It Free? */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Why Is It Free?</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
            We believe in democratizing tax planning. Our mission is to help every Indian make informed tax decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyFreePoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-sm hover:shadow-md transition-all border border-blue-100"
              >
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Indicators */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-gradient-to-br from-primary-50 via-white to-primary-100 p-12 rounded-3xl border border-primary-200 shadow-lg">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
              Trusted by Millions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {trustIndicators.map((indicator, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-all border border-primary-200 group hover:-translate-y-1"
                >
                  <div className="text-4xl font-bold text-primary-400 mb-2 group-hover:scale-105 transition-transform">
                    {indicator.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {indicator.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};