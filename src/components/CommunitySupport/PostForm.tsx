import React, { useState } from 'react';

interface PostFormProps {
  onSubmit: (post: { text: string; image?: File }) => void;
}

export const PostForm: React.FC<PostFormProps> = ({ onSubmit }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSubmit({ text, image: image || undefined });
      setText('');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Share your tax-related thoughts, questions, or insights..."
        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        rows={4}
      />
      <div className="mt-4 flex items-center justify-between">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files?.[0] || null)}
          className="text-sm text-gray-600"
        />
        <button
          type="submit"
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Post
        </button>
      </div>
    </form>
  );
}; 