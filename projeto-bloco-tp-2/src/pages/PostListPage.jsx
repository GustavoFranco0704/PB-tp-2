import React, { useState } from 'react';
import PostCard from '../components/PostCard';
import TopicDetailsPage from './TopicDetailsPage'; 

const PostsListPage = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(null); 

  const topics = [
    { id: 1, title: 'Primeiro tópico', author: 'Alice', comments: 5, likes: 10 },
    { id: 2, title: 'Segundo tópico', author: 'Bob', comments: 3, likes: 8 },
  ];

  const showTopicDetails = (id) => {
    setSelectedTopicId(id);
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8">Lista de Tópicos</h1>
      
      {topics.map(topic => (
        <div key={topic.id} className="mt-4">
          <PostCard topic={topic} />
          <button onClick={() => showTopicDetails(topic.id)}>Ver Detalhes</button>
        </div>
      ))}
      
      {selectedTopicId && <TopicDetailsPage id={selectedTopicId} />}
    </div>
  );
}

export default PostsListPage;
