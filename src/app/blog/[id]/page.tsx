import { posts } from '@/data';
import { Grid } from '@mui/material';
import PostBody from '@/components/blogPost/PostBody';
import { Post } from '@/classes/Post';
import PostAuthor from '@/components/blogPost/PostAuthor';

const BlogPostPage = ({ params }: { params: { id: string } }): JSX.Element => {
  const post = posts.find((post) => post.id === parseInt(params.id, 10));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Grid container gap={5} mt={5}>
      <Grid item xs={12} lg={2}>
        <PostAuthor />
      </Grid>
      <Grid item xs={12} lg={8} sx={{
        border: '1px solid black',
        borderRadius: '1rem',
        padding: '1rem',
      }}>
        <PostBody post={new Post(post)} />
      </Grid>
      <Grid item xs={12} lg={2} />
    </Grid>
  );
};

export default BlogPostPage;