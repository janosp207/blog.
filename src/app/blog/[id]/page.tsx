'use client';

import { Grid, Button, styled } from '@mui/material';
import PostBody from '@/components/blogPost/PostBody';
import { Post } from '@/classes/Post';
import PostAuthor from '@/components/blogPost/PostAuthor';
import PostComments from '@/components/blogPost/PostComments';
import CreateComment from '@/components/blogPost/CreateComment';
import { usePost } from '@/api/post';

const BlogPostPage = ({ params }: { params: { id: string } }): JSX.Element => {
  const { post, isLoading } = usePost(params.id);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} lg={2}>
          <PostAuthor post={post} />
        </Grid>
        <Grid item xs={12} lg={8} textAlign={'center'}>
          <PostBody post={post} />
          <CreateComment />
        </Grid>
        <Grid item xs={12} lg={2} />
      </Grid>
      <PostComments />
    </>
  );
};

export default BlogPostPage;