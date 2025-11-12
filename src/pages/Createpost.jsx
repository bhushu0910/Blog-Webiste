import { TextField, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Form, useNavigate } from "react-router-dom";

function Createpost({ addPost }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;
    addPost({ title, content });
    navigate("/");
  };

  return (
    <>
      <div className="col-md-8 mx-auto">
        <Typography variant="h4" gutterBottom>
          Create New Post
        </Typography>

        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            fullWidth
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mb-3"
          />

          <TextField
            label="Content"
            fullWidth
            multiline
            rows={6}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="mb-3"
          />

          <Button type="submit" variant="contained" color="primary">
            Publish
          </Button>
        </form>
      </div>
    </>
  );
}

export default Createpost;
