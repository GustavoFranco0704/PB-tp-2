import React from 'react';
import PostCard from '../components/PostCard';
import Comment from '../components/Comment';

const TopicDetailsPage = ({ id }) => {
  
 
  const topic = { id: id, title: 'Título do Tópico', author: 'Alice', comments: 5, likes: 10 };
  
  const comments = [
    { id: 1, text: 'Comentário 1', author: 'Bob' },
    { id: 2, text: 'Comentário 2', author: 'Charlie' },
    
  ];

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8">Detalhes do Tópico</h1>
      <PostCard topic={topic} />
      <h2 className="text-2xl font-bold mt-8">Comentários</h2>
      {comments.map(comment => (
        <Comment key={comment.id} comment={comment} />
      ))}
    </div>
  );
}

export default TopicDetailsPage;
