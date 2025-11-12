import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Post from './pages/Post';
import CreatePost from './pages/Createpost';

function App() {
   const [posts, setPosts] = useState([
    { id: 1, title: "Welcome to my Blog", content: "This is my first post!" },
  ]);

  const addPost = (post) => setPosts([...posts, { ...post, id: Date.now() }]);

  return (
    <>
      <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home posts={posts} />} />
          <Route path="/post/:id" element={<Post posts={posts} />} />
          <Route path="/create" element={<CreatePost addPost={addPost} />} />
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App
