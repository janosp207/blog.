"use client"

import Title from "@/components/blogBoard/Title";
import { Grid } from "@mui/material";
import NewBlogSettings from "@/components/newBlog/NewBlogSettings";
import NewBlogEditor from "@/components/newBlog/NewBlogEditor";
const NewPost = () => {
  return (
    <>
      <Title text="New Post" />
      <Grid container gap={3} justifyContent='center'>
        <Grid item xs={12} md={5} lg={4}>
          <NewBlogSettings />
        </Grid>
        <Grid item xs={12} md={6} lg={7}>
          <NewBlogEditor />
        </Grid>
      </Grid >
    </>
  )
};

export default NewPost;