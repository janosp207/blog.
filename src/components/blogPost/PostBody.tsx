'use client';

import { Post } from "@/classes/Post";
import { Box, Typography, styled } from "@mui/material";
import BlogTag from "@/components/utils/BlogTag";

const StyledBlogBody = styled(Box)({
  border: '1px solid black',
  borderRadius: '1rem',
  padding: '1rem',
  textAlign: 'justify',
})

const StyledBlogText = styled(Typography)({
  marginBottom: '3rem',
  fontSize: '1.5rem',
})


const PostBody = ({ post }: { post: Post }): JSX.Element => {
  return (
    <StyledBlogBody>
      <Box display='flex' flexDirection='row' flexWrap='wrap' gap={3}>
        <Typography variant='h6' fontWeight='bold' >{post.formattedDate}</Typography>
        {
          post.tags.map((tag) => (
            <BlogTag tag={tag} key={`${post.title}-${tag}`} />
          ))
        }
      </Box>
      <Typography variant='h1' fontWeight='bold'>{post.title}</Typography>
      <Typography variant='h6' fontWeight='bold' >({post.shorttext})</Typography>

      <Box mt={5}>
        {post.text.map((text, index) => (
          <StyledBlogText key={`${index}-paragraph`} paragraph>{text}</StyledBlogText>
        ))}
      </Box>
    </StyledBlogBody>
  );
};

export default PostBody;