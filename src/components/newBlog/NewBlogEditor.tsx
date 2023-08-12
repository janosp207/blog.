import { Typography, styled, Box, TextareaAutosize, Button } from '@mui/material';

const StyledEditor = styled(Box)({
  border: '1px solid black',
  padding: '2rem',
  borderRadius: '1rem',
  overflowY: 'scroll',
  maxHeight: '75vh',
});

const StyledTextArea = styled(TextareaAutosize)({
  width: '100%',
  border: '1px solid lightgrey',
  borderRadius: '1rem',
  padding: '1rem',
  resize: 'none',
  fontFamily: 'inherit',
  fontSize: 'inherit',
});

const StyledRemoveButton = styled(Button)({
  position: 'absolute',
  width: '2rem',
  minWidth: '2rem',
  height: '2rem',
  padding: '0',
  borderRadius: '0',
  top: '10px',
  right: '-15px'
});

const StyledNewParagraph = styled(Button)({
  top: '-1.2rem',
  left: '50%',
  transform: 'translateX(-50%)',
  fontSize: '0.8rem',
  height: '1.5rem',
});

type Props = {
  text: string[];
  setText: (texts: string[]) => void;
}

const NewBlogEditor = ({ text, setText }: Props): JSX.Element => {

  const handleNewParagraph = (index: number) => {
    const newTexts = [...text];
    newTexts.splice(index + 1, 0, '');
    setText(newTexts);
  }

  const handleRemoveParagraph = (index: number) => {
    const newTexts = [...text];
    newTexts.splice(index, 1);
    setText(newTexts);
  }

  const handleChange = (index: number, newText: string) => {
    const newTexts = [...text];
    newTexts[index] = newText;
    setText(newTexts);
  }

  return (
    <StyledEditor>
      <Typography variant="h6" fontWeight='bold' textAlign='center'>Blog. editor</Typography>
      {
        text.map((text, index) => (
          <Box position={'relative'} key={`${index}-textField`}>
            <StyledTextArea
              placeholder={`Paragraph ${index + 1}`}
              value={text}
              onChange={(e) => handleChange(index, e.target.value)}
            />
            {
              index !== 0 && (
                <StyledRemoveButton onClick={() => handleRemoveParagraph(index)}>
                  X.
                </StyledRemoveButton>
              )
            }
            <StyledNewParagraph
              onClick={() => handleNewParagraph(index)}
            >
              Add paragraph.
            </StyledNewParagraph>
          </Box>
        ))
      }
    </StyledEditor>
  )
};

export default NewBlogEditor;