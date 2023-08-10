"use client"

import { Post } from "@/classes/Post"
import { Typography, Box, styled, Button } from "@mui/material"
import BlogTag from "@/components/utils/BlogTag"

const StyledBlogBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  border: '1px solid black',
  padding: '3rem',
})

const StyledButton = styled(Button)({
  width: '8rem',
  borderRadius: '5rem',
  backgroundColor: '#fff',
  color: '#000',
  border: '1px solid black',
  '&:hover': {
    backgroundColor: '#000',
    color: '#fff',
  },
  fontWeight: 'bold',
})

type Props = {
  post: Post
}

const Circle = styled('div')({
  width: '10px',
  height: '10px',
  borderRadius: '50%',
  backgroundColor: '#E9E9E9',
})

const BlogPost = ({ post }: Props): JSX.Element => {
  return (
    <StyledBlogBox>
      <Box>
        <Typography variant="h4" fontWeight='bold'>{post.title}</Typography>
        <Typography variant="subtitle1" fontWeight='bold'>{post.date}</Typography>
      </Box>
      <Typography variant="body1">{post.shortText}</Typography>
      <Box display='flex' flexDirection='row' gap={2} alignItems='center' flexWrap='wrap'>
        <StyledButton variant="contained" color="primary">Read more.</StyledButton>
        <Circle />
        {
          post.tags.map((tag) => (
            <BlogTag tag={tag} />
          ))
        }
      </Box>
    </StyledBlogBox>
  )
}

export default BlogPost;