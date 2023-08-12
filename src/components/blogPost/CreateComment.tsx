import { Box, TextareaAutosize, Typography, styled, Button } from "@mui/material";

const StyledTextArea = styled(TextareaAutosize)({
  width: '100%',
  border: '1px solid lightgrey',
  borderRadius: '1rem',
  padding: '1rem',
  resize: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  backgroundColor: 'black',
  color: 'white',
  fontWeight: 'bold',
});

const StyledNewCommentBox = styled(Box)({
  border: '3px solid black',
  borderRadius: '1rem',
  padding: '1rem',
  textAlign: 'left',
  width: '100%',
});

const StyledPostButton = styled(Button)({
  padding: '0.5rem 1rem',
  float: 'right'
});


const CreateComment = () => {
  return (
    <StyledNewCommentBox mt={3}>
      <Typography variant='h6' fontWeight='bold' mb={2}>
        Let the author know your thougts.
      </Typography>
      <StyledTextArea
        aria-label="minimum height"
        minRows={3}
        placeholder="Write a comment..."
        style={{ width: '100%' }}
      />
      <StyledPostButton variant="contained">Post comment.</StyledPostButton>
    </StyledNewCommentBox>
  );
}

export default CreateComment;