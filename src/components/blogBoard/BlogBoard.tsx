"use client"

import BlogPostCard from '@/components/blogBoard/BlogPostCard'
import { Post } from '@/classes/Post'
import { Box, styled } from '@mui/material'
import { PostFormat } from '@/classes/Post'

const StyledBlogBoard = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
})

const BlogPostContainer = styled(Box)({
  padding: '1rem',
  '@media (max-width: 600px)': {
    width: '100%',
  },
})

type Props = {
  posts: Post[]
}

const BlogBoard = ({ posts }: Props): JSX.Element => {
  return (
    <StyledBlogBoard>
      {posts.map((post, index) => (
        <BlogPostContainer
          sx={{
            width: post.format === PostFormat.FULL ? '100%' : '50%',
          }}
          key={`${post.title}-${index}`}>
          <BlogPostCard post={post as Post} />
        </BlogPostContainer>
      ))
      }
    </StyledBlogBoard >
  )
}

export default BlogBoard