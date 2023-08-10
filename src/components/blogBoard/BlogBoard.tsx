"use client"

import { posts } from '@/data'
import BlogPost from '@/components/blogBoard/BlogPost'
import { Post } from '@/classes/Post'
import { Box, styled } from '@mui/material'

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

const BlogBoard = (): JSX.Element => {
  return (
    <StyledBlogBoard>
      {posts.map((post, index) => (
        <BlogPostContainer
          sx={{
            width: index === 0 && posts.length % 2 !== 0 ? '100%' : '50%',
          }}
          key={`${post.title}-${index}`}>
          <BlogPost post={post as Post} />
        </BlogPostContainer>
      ))
      }
    </StyledBlogBoard >
  )
}

export default BlogBoard