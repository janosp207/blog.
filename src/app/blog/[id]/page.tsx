'use client';

import { posts } from '@/data';
import { Grid, Button, styled } from '@mui/material';
import PostBody from '@/components/blogPost/PostBody';
import { Post } from '@/classes/Post';
import PostAuthor from '@/components/blogPost/PostAuthor';
import PostComments from '@/components/blogPost/PostComments';

const StyledComment = styled(Button)({
  marginTop: '1rem',
  marginBottom: '1rem',
  width: '80%',
  backgroundColor: '#0D0D0D',
  color: 'white',
  '&:hover': {
    backgroundColor: '#2D2D2D',
  },
});

const BlogPostPage = ({ params }: { params: { id: string } }): JSX.Element => {
  const post = posts.find((post) => post.id === parseInt(params.id, 10));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <>
      <Grid container spacing={3} mt={5}>
        <Grid item xs={12} lg={2}>
          <PostAuthor />
        </Grid>
        <Grid item xs={12} lg={8} textAlign={'center'}>
          <PostBody post={new Post(post)} />
          <StyledComment>Add comment.</StyledComment>
        </Grid>
        <Grid item xs={12} lg={2} />
      </Grid>
      <PostComments />
    </>
  );
};

export default BlogPostPage;