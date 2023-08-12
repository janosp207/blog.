'use client';

import { Comment } from "@/classes/Comment";
import { Typography } from "@mui/material";
import { styled, Box } from "@mui/system";

const StyledCommentBox = styled(Box)({
  border: '1px solid black',
  borderRadius: '1rem',
  padding: '1rem',
});

const Comment = ({ comment }: { comment: Comment }) => {
  return (
    <StyledCommentBox>
      <Box display='flex' flexDirection='row' alignItems='center'>
        <Box>
          <Typography variant='h6' fontWeight='bold'>{comment.name} says</Typography>
          <Typography component='p' >{comment.usertag}</Typography>
        </Box>
        <Typography component='p' ml='auto' fontWeight='bold'>{comment.formattedDate}</Typography>
      </Box>

      <Typography component='p' mt={2} fontWeight='bold'>"{comment.text}"</Typography>
    </StyledCommentBox>
  );
};

export default Comment;