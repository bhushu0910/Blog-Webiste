import { Typography } from '@mui/material'
import React from 'react';
import PostCard from '../components/Postcard';

const Home = ( {posts} ) => {
  return (
    <>
      <div>
      <Typography variant="h5" gutterBottom>
        Latest Posts
      </Typography>

      <div className="row">
        {posts.map((post) => (
          <div className="col-md-4 mb-3" key={post.id}>
            <PostCard post={post} />
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Home
