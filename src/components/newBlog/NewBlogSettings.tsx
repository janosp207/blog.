import { tags } from "@/data"
import { TextField, Typography, styled, TextareaAutosize, Autocomplete, Chip, Box } from "@mui/material"
import { PostFormat } from "@/classes/Post"
import { useState } from "react"
const StyledPostSettings = styled(Box)({
  border: '1px solid black',
  padding: '2rem',
  borderRadius: '5px',
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
  border: '1px solid lightgrey',
  borderRadius: '5px',
  padding: '1rem',
  resize: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
})

const StyledCategoryBox = styled(Box)({
  width: '100%',
  fontFamily: 'inherit',
  fontSize: 'inherit',
  marginBottom: '1rem',

  '& > *': {
    marginBottom: '0.5rem',
  },

  '& > p': {
    fontSize: '1.1rem',
  }
})

const NewBlogSettings = () => {
  const [activeFormat, setActiveFormat] = useState<PostFormat>(PostFormat.FULL)

  return (
    <StyledPostSettings>
      <Typography variant="h6" fontWeight='bold' textAlign='center'>Post Settings</Typography>
      <StyledCategoryBox>
        <Typography>Choose a format</Typography>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <StyledFormatItem
            active={activeFormat === PostFormat.FULL}
            onClick={() => setActiveFormat(PostFormat.FULL)}
          >FULL</StyledFormatItem>
          <StyledFormatItem
            active={activeFormat === PostFormat.HALF}
            onClick={() => setActiveFormat(PostFormat.HALF)}
          >HALF</StyledFormatItem>
        </Box>
      </StyledCategoryBox>
      <StyledCategoryBox>
        <Typography>Blog. title</Typography>
        <TextField fullWidth variant="outlined" placeholder="Title" />
      </StyledCategoryBox>
      <StyledCategoryBox>
        <Typography>Blog. description</Typography>
        <StyledTextArea placeholder="Short description about the post..." />
      </StyledCategoryBox>
      <StyledCategoryBox>
        <Typography>Blog. tags</Typography>
        <Autocomplete
          multiple
          id="tags-filled"
          options={tags.map((option) => option)}
          freeSolo
          renderTags={(value: readonly string[], getTagProps) =>
            value.map((option: string, index: number) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Tags"
              placeholder="Tags"
            />
          )}
        />
      </StyledCategoryBox>
    </StyledPostSettings>
  )
}

export default NewBlogSettings;