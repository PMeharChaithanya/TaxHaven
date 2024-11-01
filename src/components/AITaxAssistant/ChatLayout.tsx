import React from 'react';
import { motion } from 'framer-motion';

interface ChatLayoutProps {
  children: React.ReactNode;
  title?: string;
}

export const ChatLayout: React.FC<ChatLayoutProps> = ({ children, title = 'AI Tax Assistant' }) => {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
      >
        <div className="border-b border-gray-100 p-4 bg-white">
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          <p className="text-sm text-gray-500">Ask any tax-related questions</p>
        </div>
        {children}
      </motion.div>
    </div>
  );
}; 