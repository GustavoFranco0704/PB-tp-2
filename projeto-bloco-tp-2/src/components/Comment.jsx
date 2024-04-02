
import React from 'react';

const Comment = ({ comment }) => {
  const { text, author } = comment;

  return (
    <div className="bg-gray-100 p-4 mb-4 rounded-lg">
      <p className="text-lg font-semibold">{text}</p>
      <p className="text-sm text-gray-500">Por: {author}</p>
    </div>
  );
}

export default Comment;
