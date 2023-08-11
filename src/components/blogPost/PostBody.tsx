'use client';

import { Post } from "@/classes/Post";
import { Box, Typography, styled } from "@mui/material";

const StyledBlogBody = styled(Box)({
  marginTop: '1rem',
})

const StyledBlogText = styled(Typography)({
  marginBottom: '3rem',
  fontSize: '1.5rem',
})


const PostBody = ({ post }: { post: Post }): JSX.Element => {
  return (
    <StyledBlogBody>
      <Typography variant='h6' fontWeight='bold' >{post.date}</Typography>
      <Typography variant='h1' fontWeight='bold'>{post.title}</Typography>
      <Typography variant='h6' fontWeight='bold' >({post.shortText})</Typography>

      <Box mt={5}>
        {post.text.map((text, index) => (
          <StyledBlogText key={index} paragraph>{text}</StyledBlogText>
        ))}
      </Box>
    </StyledBlogBody>
  );
};

export default PostBody;