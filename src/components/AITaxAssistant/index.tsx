import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GeminiService } from '../../services/geminiService';
import { ChatLayout } from './ChatLayout';
import { Message } from './Message';
import { MessageContent } from './types';

export const AITaxAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [conversation, setConversation] = useState<MessageContent[]>([{
    type: 'assistant',
    message: 'Hello! I\'m your AI Tax Assistant. How can I help you today?',
    timestamp: Date.now(),
    suggestions: [
      'Calculate my HRA exemption',
      'Explain Section 80C benefits',
      'Help me with tax saving options'
    ]
  }]);
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setConversation(prev => [...prev, {
      type: 'user',
      message: query,
      timestamp: Date.now()
    }]);

    setLoading(true);
    try {
      const result = await GeminiService.getResponse(query);
      if (!result.message) {
        throw new Error('Empty response');
      }
      
      setConversation(prev => [...prev, {
        type: 'assistant',
        message: result.message,
        timestamp: Date.now(),
        calculations: result.calculations
      }]);
    } catch (error) {
      console.error('Chat Error:', error);
      setConversation(prev => [...prev, {
        type: 'assistant',
        message: 'I encountered an error. Please try asking your question again.',
        timestamp: Date.now()
      }]);
    } finally {
      setLoading(false);
      setQuery('');
    }
  };

  return (
    <ChatLayout>
      <div 
        ref={chatContainerRef}
        className="h-[600px] overflow-y-auto p-6 space-y-6"
        style={{
          scrollBehavior: 'smooth',
          maskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 5%, black 95%, transparent 100%)'
        }}
      >
        {conversation.map((msg, index) => (
          <Message 
            key={msg.timestamp} 
            message={msg} 
            onSuggestionClick={setQuery}
          />
        ))}
        
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex justify-start"
          >
            <div className="bg-gray-50 rounded-2xl p-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-150" />
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-300" />
            </div>
          </motion.div>
        )}
      </div>

      <div className="border-t border-gray-100 p-4 bg-gray-50">
        <form onSubmit={handleSubmit} className="flex gap-3">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask about taxes, calculations, or contracts..."
            className="flex-1 px-4 py-3 rounded-xl border border-gray-200 
              focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
              text-gray-800 placeholder-gray-400"
            disabled={loading}
          />
          <button
            type="submit"
            disabled={loading || !query.trim()}
            className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 
              text-white rounded-xl font-medium hover:from-blue-600 
              hover:to-blue-700 transition-all duration-200 disabled:opacity-50
              disabled:cursor-not-allowed shadow-md hover:shadow-lg"
          >
            {loading ? 'Thinking...' : 'Send'}
          </button>
        </form>
      </div>
    </ChatLayout>
  );
};

export default AITaxAssistant; 