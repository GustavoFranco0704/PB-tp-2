import React from 'react';
import PostListPage from './pages/PostListPage';
import TopicDetailsPage from './pages/TopicDetailsPage';

function App() {
  console.log("Componente App está sendo renderizado!");
  return (
    <div className='border-2 width-32'>
      <PostListPage />
      <TopicDetailsPage />
      
      
    </div>
  );
}

export default App;


