'use client';

import { Typography, Box, Grid } from "@mui/material";
import Comment from "./Comment";
import { comments } from "@/data";
import { Comment as CommentClass } from "@/classes/Comment";

const PostComments = () => {
  return (
    <Box mt={5}>
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