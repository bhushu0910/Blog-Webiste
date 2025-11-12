import { Card, CardContent, Typography, Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Postcard = ({ post }) => {
  const previewLength = 200;
  return (
    <>
      <Card>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>

          {/* Preview content */}
          <Typography variant="body2" paragraph>
            {post.content.length > previewLength
              ? post.content.substring(0, previewLength) + "..."
              : post.content}
          </Typography>
          <Button
            component={Link}
            to={`/post/${post.id}`}
            variant="contained"
            size="small"
          >
            Read More
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default Postcard;
