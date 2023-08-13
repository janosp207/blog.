"use client"

import Title from "@/components/blogBoard/Title";
import { Button, Grid, styled, Box } from "@mui/material";
import NewBlogSettings from "@/components/newBlog/NewBlogSettings";
import NewBlogEditor from "@/components/newBlog/NewBlogEditor";
import { useState, useEffect } from "react";
import { usePosts } from "@/api/post";
import { Post } from "@/classes/Post";
import { useRouter } from "next/navigation";
import { PATHS } from "@/paths";

const StyledButton = styled(Button)({
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 1000,
  padding: '0.5rem 3rem',
});

type Settings = {
  title: string,
  shorttext: string,
  tags: string[],
  format: string,
};

const NewPost = ({ params }: { params: { id: string } }): JSX.Element => {
  const router = useRouter();
  const { store, isLoading } = usePosts(params.id);
  const [settings, setSettings] = useState({});
  const [text, setText] = useState<string[]>(['']);
  const [disableSave, setDisableSave] = useState<boolean>(true);

  useEffect(() => {
    const hasText = text.some(text => text.length > 0);
    const hasSettings = Object.keys(settings).length > 0;
    setDisableSave(!hasText || !hasSettings);
  }, [text, settings])

  const handleCreatePost = async () => {
    const { title, shorttext, tags, format } = settings as Settings;

    const newPost = new Post({
      title,
      shorttext,
      tags,
      format: parseInt(format, 10),
      text
    })

    const data = await store(newPost);

    if (data) {
      router.push(PATHS.POST.replace(':id', `${data.id}`));
    }
  }

  return (
    <Box mb={4}>
      <Title text="New Post" />
      <Grid container gap={3} justifyContent='center'>
        <Grid item xs={12} md={5} lg={4}>
          <NewBlogSettings setSettings={setSettings} setDisableSave={setDisableSave} />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <NewBlogEditor
            text={text}
            setText={setText}
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