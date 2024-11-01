import React from 'react';
import { motion } from 'framer-motion';
import { MessageContent } from './types';

interface MessageProps {
  message: MessageContent;
}

export const Message: React.FC<MessageProps> = ({ message }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
    >
      <div className={`max-w-[80%] rounded-2xl p-4 ${
        message.type === 'user' 
          ? 'bg-blue-500 text-white' 
          : 'bg-gray-50 border border-gray-100'
      }`}>
        <p className="text-[15px] leading-relaxed whitespace-pre-line">
          {message.message || 'No message content'}
        </p>
        
        {message.calculations?.length > 0 && (
          <div className="mt-4 space-y-2 text-sm">
            {message.calculations.map((calc, idx) => (
              <div key={idx} className="flex justify-between">
                <span>{calc.label}:</span>
                <span className="font-medium">₹{calc.value.toLocaleString()}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}; 