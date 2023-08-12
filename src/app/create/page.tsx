"use client"

import Title from "@/components/blogBoard/Title";
import { Button, Grid, styled, Box } from "@mui/material";
import NewBlogSettings from "@/components/newBlog/NewBlogSettings";
import NewBlogEditor from "@/components/newBlog/NewBlogEditor";
import { useState, useEffect } from "react";

const StyledButton = styled(Button)({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000,
  padding: '0.5rem 3rem',
});


const NewPost = () => {
  const [settings, setSettings] = useState({})
  const [paragraphTexts, setParagraphTexts] = useState<string[]>(['']);
  const [disableSave, setDisableSave] = useState<boolean>(true);

  useEffect(() => {
    const hasText = paragraphTexts.some(text => text.length > 0);
    const hasSettings = Object.keys(settings).length > 0;
    setDisableSave(!hasText || !hasSettings);
  }, [paragraphTexts, settings])

  const handleCreatePost = () => {
    console.log(settings, paragraphTexts)
  }

  return (
    <Box mb={4}>
      <Title text="New Post" />
      <Grid container gap={3} justifyContent='center'>
        <Grid item xs={12} md={5} lg={4}>
          <NewBlogSettings setSettings={setSettings} />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <NewBlogEditor
            paragraphTexts={paragraphTexts}
            setParagraphTexts={setParagraphTexts}
          />
        </Grid>
      </Grid >
      <StyledButton disabled={disableSave} variant="contained" onClick={() => handleCreatePost()}>
        Create Post
      </StyledButton>
    </Box>
  )
};

export default NewPost;