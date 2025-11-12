import { Typography, Button } from '@mui/material';
import React from 'react'
import { useParams, Link } from 'react-router-dom'

function Post({posts}) {
    const {id} = useParams();
    const post = posts.find((p) => p.id.toString() === id);

    if(!post){
        return (
          <div>
            <Typography variant="h5">Post Not Found</Typography>
            <Button
              component={Link}
              to="/"
              className="mt-3"
              variant="contained"
            >
              Back Home
            </Button>
          </div>
        );
    }
  
  
  
    return (
      <>
        <div>
          <Typography variant="h4" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body1" paragraph>
            {post.content}
          </Typography>

          <Button
            component={Link}
            to="/"
            variant="outlined"
            color="secondary"
            className="mt-3"
          >
            Back
          </Button>
        </div>
      </>
    );
}

export default Post
