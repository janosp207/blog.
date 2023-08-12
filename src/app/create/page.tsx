"use client"

import Title from "@/components/blogBoard/Title";
import { Button, Grid, styled, Box } from "@mui/material";
import NewBlogSettings from "@/components/newBlog/NewBlogSettings";
import NewBlogEditor from "@/components/newBlog/NewBlogEditor";
import { useState } from "react";

const StyledButton = styled(Button)({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000,
  padding: '0.5rem 3rem',
  backgroundColor: '#0D0D0D',
  color: 'white',
  '&:hover': {
    backgroundColor: '#2D2D2D',
  },
});


const NewPost = () => {
  const [settings, setSettings] = useState({})
  const [text, setText] = useState([])

  const handleCreatePost = () => {
    console.log('create post');
  }

  return (
    <Box mb={4}>
      <Title text="New Post" />
      <Grid container gap={3} justifyContent='center'>
        <Grid item xs={12} md={5} lg={4}>
          <NewBlogSettings />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <NewBlogEditor />
        </Grid>
      </Grid >
      <StyledButton color="primary" onClick={() => handleCreatePost()}>Create Post</StyledButton>
    </Box>
  )
};

export default NewPost;