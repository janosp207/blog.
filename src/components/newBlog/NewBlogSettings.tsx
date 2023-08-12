import { tags } from "@/data"
import { TextField, Typography, styled, TextareaAutosize, Autocomplete, Chip, Box, Button } from "@mui/material"
import { PostFormat } from "@/classes/Post"
import { useState } from "react"
import Image from "next/image"
import React from "react"

const StyledPostSettings = styled(Box)({
  border: '1px solid black',
  padding: '2rem',
  borderRadius: '1rem',
})

const StyledFormatItem = styled(Image, { shouldForwardProp: (prop) => prop !== 'active' })(({ active }: { active: boolean }) => ({
  border: active ? '2px solid black' : '1px solid grey',
  boxShadow: active ? '0px 0px 10px 0px rgba(0,0,0,0.3)' : 'none',
  cursor: 'pointer',
  transition: 'all 0.2s ease',
  borderRadius: '0.6rem',
}))

const StyledTextArea = styled(TextareaAutosize)({
  width: '100%',
  border: '1px solid lightgrey',
  borderRadius: '1rem',
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

type Props = {
  setSettings: (settings: any) => void
}

const NewBlogSettings = ({ setSettings }: Props) => {
  const [activeFormat, setActiveFormat] = useState<PostFormat>(PostFormat.FULL);
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [postTags, setPostTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const handleSaveSettings = () => {
    setSettings({
      format: activeFormat,
      title,
      description,
      tags: postTags,
    });
  };

  return (
    <StyledPostSettings>
      <Typography variant="h6" fontWeight='bold' textAlign='center'>Post Settings</Typography>
      <StyledCategoryBox>
        <Typography>Choose a format</Typography>
        <Box display='flex' flexDirection='row' justifyContent='space-between'>
          <StyledFormatItem
            active={activeFormat === PostFormat.FULL}
            onClick={() => setActiveFormat(PostFormat.FULL)}
            src={'/images/fullwidth.jpg'} alt='fullwidth'
            width={200}
            height={140}
          />
          <StyledFormatItem
            active={activeFormat === PostFormat.HALF}
            onClick={() => setActiveFormat(PostFormat.HALF)}
            src={'/images/halfwidth.jpg'} alt='halfwidth'
            width={200}
            height={140}
          />
        </Box>
      </StyledCategoryBox>
      <StyledCategoryBox>
        <Typography>Blog. title</Typography>
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
      </StyledCategoryBox>
      <StyledCategoryBox>
        <Typography>Blog. description</Typography>
        <StyledTextArea
          placeholder="Short description about the post..."
          onChange={(e) => setDescription(e.target.value)}
        />
      </StyledCategoryBox>
      <StyledCategoryBox>
        <Typography>Blog. tags</Typography>
        <Autocomplete
          multiple
          id="tags-filled"
          options={tags.map((option) => option)}
          freeSolo
          renderOption={(props, option) => {
            return (
              <li {...props} key={option}>
                {option}
              </li>
            );
          }}
          renderTags={(tagValue, getTagProps) => {
            return tagValue.map((option, index) => (
              <Chip {...getTagProps({ index })} key={option} label={option} />
            ))
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Tags"
              placeholder="Tags"
            />
          )}
          onChange={(e, value) => setPostTags(value)}
          value={postTags}
          inputValue={inputValue}
          onInputChange={(e, value) => setInputValue(value)}
        />
        <Button
          variant="contained"
          onClick={() => handleSaveSettings()}
        >
          Save settings
        </Button>
      </StyledCategoryBox>
    </StyledPostSettings>
  )
}

export default NewBlogSettings;