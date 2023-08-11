'use client';

import { Box, Button, Typography, styled } from '@mui/material';
import { user } from '@/data';

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

const PostAuthor = () => (
  <AuthorBox>
    <Box mb={2}>
      <Typography variant='h6' fontWeight='bold' >Author.</Typography>
      <Typography variant='h4' fontWeight='bold' >{user.name}</Typography>
      <Typography fontWeight='bold' >@{user.usertag}</Typography>
    </Box>
    <Box>
      <Button>
        View  profile
      </Button>
    </Box>
  </AuthorBox>
);

export default PostAuthor;