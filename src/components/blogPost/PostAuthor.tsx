'use client';

import { Box, Button, Typography, styled } from '@mui/material';
import { user } from '@/data';
import { Post } from '@/classes/Post';

const AuthorBox = styled(Box)({
  border: '1px solid black',
  borderRadius: '1rem',
  position: 'sticky',
  top: '5rem',
  padding: '1rem',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  alignItems: 'center',
});

type Props = {
  post: Post;
}

const PostAuthor = ({ post }: Props) => (
  <AuthorBox>
    <Box mb={2}>
      <Typography variant='h6' fontWeight='bold' >Author.</Typography>
      <Typography variant='h4' fontWeight='bold' >{post.username}</Typography>
      <Typography fontWeight='bold' >@{post.usertag}</Typography>
    </Box>
    <Box>
      <Button>
        View  profile
      </Button>
    </Box>
  </AuthorBox>
);

export default PostAuthor;