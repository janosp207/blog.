"use client"

import Title from "@/components/blogBoard/Title";
import { Box, Grid, TextField, Typography, styled, TextareaAutosize } from "@mui/material";
import { PostFormat } from "@/classes/Post";
import { useState } from "react";

const StyledPostSettings = styled(Box)({
  border: '1px solid black',
  padding: '2rem'
})

const StyledFormatItem = styled(Box, { shouldForwardProp: (prop) => prop !== 'active' })(({ active }: { active: boolean }) => ({
  width: '15rem',
  height: '10rem',
  border: active ? '1px solid black' : '1px solid grey',
  boxShadow: active ? '0px 0px 10px 0px rgba(0,0,0,0.3)' : 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
}))

const StyledTextArea = styled(TextareaAutosize)({
  width: '100%',
  border: '1px solid black',
  padding: '1rem',
  resize: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
})

const NewPost = () => {
  const [activeFormat, setActiveFormat] = useState<PostFormat>(PostFormat.FULL)

  return (
    <>
      <Title text="New Post" />
      <Grid container>
        <Grid item xs={12} md={4}>
          <StyledPostSettings>
            <Typography variant="h6" fontWeight='bold' textAlign='center'>Post Settings</Typography>
            <Box>
              <Typography>Choose a format</Typography>
              <Box display='flex' flexDirection='row' justifyContent='space-between'>
                <StyledFormatItem
                  active={activeFormat === PostFormat.FULL}
                  onClick={() => setActiveFormat(PostFormat.FULL)}
                />
                <StyledFormatItem
                  active={activeFormat === PostFormat.HALF}
                  onClick={() => setActiveFormat(PostFormat.HALF)}
                />
              </Box>
            </Box>
            <Box>
              <Typography>Blog. title</Typography>
              <TextField fullWidth variant="outlined" placeholder="Title" />
            </Box>
            <Box>
              <Typography>Blog. description</Typography>
              <StyledTextArea placeholder="Short description about the post..." />
            </Box>
          </StyledPostSettings>


        </Grid>
      </Grid>
    </>
  )
}

export default NewPost;