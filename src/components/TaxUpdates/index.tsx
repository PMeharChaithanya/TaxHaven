import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { TaxUpdateService } from '../../services/taxUpdateService';

interface TaxUpdate {
  id: number;
  title: string;
  description: string;
  date: Date;
  category: 'breaking' | 'new' | 'upcoming';
  source: string;
}

export const TaxUpdates: React.FC = () => {
  const [updates, setUpdates] = useState<TaxUpdate[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUpdates = async () => {
      setLoading(true);
      try {
        const data = await TaxUpdateService.fetchLatestUpdates();
        setUpdates(data);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUpdates();
    // Refresh every 5 minutes
    const interval = setInterval(fetchUpdates, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4">
      <h2 className="text-2xl font-bold mb-6">Latest Tax Updates</h2>
      {loading ? (
        <div className="flex justify-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600" />
        </div>
      ) : (
        <div className="space-y-6">
          {updates.map((update) => (
            <motion.div
              key={update.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className={`
                    px-3 py-1 rounded-full text-sm font-medium
                    ${update.category === 'breaking' ? 'bg-red-100 text-red-600' : 
                      update.category === 'new' ? 'bg-green-100 text-green-600' : 
                      'bg-blue-100 text-blue-600'}
                  `}>
                    {update.category.toUpperCase()}
                  </span>
                  <h2 className="text-xl font-semibold mt-2">{update.title}</h2>
                </div>
                <span className="text-sm text-gray-500">
                  {update.date.toLocaleDateString()}
                </span>
              </div>
              <p className="text-gray-600 mb-3">{update.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Source: {update.source}</span>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                  Read More →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
}; 