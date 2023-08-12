'use client';

import { Typography, Box, Grid } from "@mui/material";
import Comment from "./Comment";
import { Comment as CommentClass } from "@/classes/Comment";

type Props = {
  comments: CommentClass[];
}

const PostComments = ({ comments }: Props): JSX.Element => {
  return (
    <Box mt={5}>
      <Typography variant='h3' fontWeight='bold' textAlign='center' mt={8} mb={3}>Comments</Typography>
      <Grid container spacing={2}>
        {
          comments.map((comment) => (
            <Grid item xs={6} lg={3} key={`${comment.author}-${comment.id}`}>
              <Comment comment={comment as CommentClass} />
            </Grid>
          ))
        }
      </Grid>
    </Box>

  );
}

export default PostComments;