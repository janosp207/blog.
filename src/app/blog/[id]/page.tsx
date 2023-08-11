import { posts } from '@/data';
import { Box, Container } from '@mui/material';
import PostBody from '@/components/blogPost/PostBody';
import { Post } from '@/classes/Post';

const BlogPostPage = ({ params }: { params: { id: string } }): JSX.Element => {
  const post = posts.find((post) => post.id === parseInt(params.id, 10));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <Container sx={{
      border: '1px solid black',
      borderRadius: '1rem',
      marginTop: '3rem',
    }}
    >
      <PostBody post={new Post(post)} />
    </Container>
  );
};

export default BlogPostPage;