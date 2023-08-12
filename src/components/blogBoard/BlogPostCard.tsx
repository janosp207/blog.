"use client"

import { Post } from "@/classes/Post"
import { Typography, Box, styled, Button } from "@mui/material"
import BlogTag from "@/components/utils/BlogTag"
import Link from "next/link"
import { PATHS } from "@/paths"

const StyledBlogBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  border: '1px solid black',
  padding: '3rem',
  borderRadius: '1rem',
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

const BlogPostCard = ({ post }: Props): JSX.Element => {
  return (
    <StyledBlogBox>
      <Box>
        <Typography variant="h4" fontWeight='bold'>{post.title}</Typography>
        <Typography variant="subtitle1" fontWeight='bold'>{post.date}</Typography>
      </Box>
      <Typography variant="body1">{post.shortText}</Typography>
      <Box display='flex' flexDirection='row' gap={2} alignItems='center' flexWrap='wrap'>
        <Link href={PATHS.POST.replace(':id', `${post.id}`)}>
          <Button variant="outlined" color="primary">Read more.</Button>
        </Link>
        <Circle />
        {
          post.tags.map((tag) => (
            <BlogTag tag={tag} key={`${post.title}-${tag}`} />
          ))
        }
      </Box>
    </StyledBlogBox>
  )
}

export default BlogPostCard;