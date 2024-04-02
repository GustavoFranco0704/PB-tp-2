import React from 'react';

const PostCard = ({ topic }) => {
  const { title, author, comments, likes } = topic;

  return (
    <div className="bg-white p-4 mb-4 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm text-gray-500">Autor: {author}</p>
      <p className="text-sm text-gray-500">Comentários: {comments}</p>
      <p className="text-sm text-gray-500">Curtidas: {likes}</p>
    </div>
  );
}

export default PostCard;
