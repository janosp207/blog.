import { Box, Typography, styled } from "@mui/material";

const StyledBlogTag = styled(Box)({
  width: 'content',
  padding: '0.3rem 1.5rem',
  borderRadius: '5rem',
  backgroundColor: '#E9E9E9',
  color: '#000',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

type Props = {
  tag: string
}

const BlogTag = ({ tag }: Props): JSX.Element => {
  return (
    <StyledBlogTag>
      <Typography>{tag}</Typography>
    </StyledBlogTag>
  );
};

export default BlogTag;