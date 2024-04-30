import React, { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';
import TopicDetailsPage from './TopicDetailsPage'; 

const PostsListPage = () => {
  const [selectedTopicId, setSelectedTopicId] = useState(null); 
  const [posts, setPosts] = useState(null);
  const [message, setMessage] = useState(null);

  const baseUrl = 'https://forum-gamificado-2f07b-default-rtdb.firebaseio.com/';

  function convertData(data) {
    const ids = Object.keys(data);
    let postsConverted = Object.values(data);
    return postsConverted.map((post, index) => {
      return {
        id: ids[index],
        ...post,
      }
    })
  }

  useEffect(() => {
    fetch(`${baseUrl}/posts.json`)
    .then(async (resp) => {
      const respPost = await resp.json();
      let convertedPost = convertData(respPost);
      setPosts(convertedPost);
    })
    .catch((err) => {
      setMessage(err.message)
    })

  }, [])

  const showTopicDetails = (id) => {
    setSelectedTopicId(id);
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mt-8">Lista de Tópicos</h1>
      
      {posts && posts.map(post => (
        <div key={post.id} className="mt-4">
          <PostCard topic={convertedPost.title} />
          <button onClick={() => showTopicDetails(post.id)}>Ver Detalhes</button>
        </div>
      ))}
      
      {selectedTopicId && <TopicDetailsPage id={selectedTopicId} />}
    </div>
  );
}

export default PostsListPage;
