import React, { useState, useEffect } from 'react';
import { TermsDialog } from './TermsDialog';
import { PostForm } from './PostForm';
import { motion } from 'framer-motion';

interface Post {
  id: number;
  text: string;
  imageUrl?: string;
  author: string;
  timestamp: Date;
  likes: number;
  isLiked: boolean;
}

export const CommunitySupport: React.FC = () => {
  const [showTerms, setShowTerms] = useState(true);
  const [hasAcceptedTerms, setHasAcceptedTerms] = useState(false);
  const [posts, setPosts] = useState<Post[]>([
    {
      id: 1,
      text: "Just discovered a great way to save on business taxes through Section 80JJAA. Has anyone else utilized this?",
      author: "TaxPro123",
      timestamp: new Date(),
      likes: 15,
      isLiked: false
    },
    {
      id: 2,
      text: "New to tax planning. What's the first thing I should focus on as a salaried employee?",
      author: "NewbieTaxPayer",
      timestamp: new Date(),
      likes: 8,
      isLiked: false
    }
  ]);

  const handleAcceptTerms = () => {
    setHasAcceptedTerms(true);
    setShowTerms(false);
    localStorage.setItem('communityTermsAccepted', 'true');
  };

  const handleNewPost = ({ text, image }: { text: string; image?: File }) => {
    const newPost: Post = {
      id: posts.length + 1,
      text,
      author: "CurrentUser", // In a real app, this would come from auth
      timestamp: new Date(),
      likes: 0,
      isLiked: false,
      imageUrl: image ? URL.createObjectURL(image) : undefined
    };
    setPosts([newPost, ...posts]);
  };

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1,
          isLiked: !post.isLiked
        };
      }
      return post;
    }));
  };

  return (
    <div className="max-w-4xl mx-auto px-4">
      <TermsDialog 
        isOpen={showTerms} 
        onAccept={handleAcceptTerms}
        onClose={() => setShowTerms(false)}
      />
      
      <h1 className="text-4xl font-bold text-gray-900 mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600">
          Community Discussions
        </span>
      </h1>

      {hasAcceptedTerms && <PostForm onSubmit={handleNewPost} />}

      <div className="mt-8 space-y-6">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-xl shadow-sm border border-gray-200"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="font-medium text-gray-900">{post.author}</h3>
                <p className="text-sm text-gray-500">
                  {post.timestamp.toLocaleDateString()}
                </p>
              </div>
              <button 
                onClick={() => handleLike(post.id)}
                className={`flex items-center gap-2 px-3 py-1 rounded-full transition-all
                  ${post.isLiked 
                    ? 'text-red-500 bg-red-50' 
                    : 'text-gray-400 hover:text-red-500 hover:bg-red-50'
                  }`}
              >
                <span className="text-xl">{post.isLiked ? '❤️' : '🤍'}</span>
                <span className="font-medium">{post.likes}</span>
              </button>
            </div>
            <p className="text-gray-600">{post.text}</p>
            {post.imageUrl && (
              <img 
                src={post.imageUrl} 
                alt="Post attachment" 
                className="mt-4 rounded-lg max-h-96 object-cover"
              />
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}; 