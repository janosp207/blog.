'use client';
import { Box, TextField, Typography, styled, Button, InputAdornment } from '@mui/material';
import CheckCircleSharpIcon from '@mui/icons-material/CheckCircleSharp';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import validateRegistration from '@/utils/validation';
import inputFields from './inputFields';

const StyledRegisterBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  borderRadius: '1rem',
  border: '1px solid black',
  width: '30rem',
  padding: '2rem',
  gap: '1.5rem',

  //fullwidth on tablets and smaller
  '@media (max-width: 768px)': {
    width: '100%',
  },

  // on medium screens
  '@media (max-width: 1024px)': {
    width: '80%',
  },
});

const StyledLink = styled(Link)({
  color: 'black',
  fontWeight: 'bold'
});

interface InputProps {
  label: string;
  type?: string;
  error: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  showCheck?: boolean;
  value: string;
}

const InputField = ({ label, type = 'text', error, onChange, name, showCheck, value }: InputProps) => {
  return (
    <TextField
      label={label}
      type={type}
      fullWidth
      error={error}
      name={name}
      onChange={onChange}
      value={value}
      InputProps={{
        endAdornment: showCheck ?
          <InputAdornment position="start">
            <CheckCircleSharpIcon color='success' />
          </InputAdornment> : null
      }}
    />
  );
}


const RegisterPage = (): JSX.Element => {
  const [newUserData, setNewUserData] = useState({
    username: '',
    usertag: '',
    password: '',
    repeatPassword: '',
  });

  const [inputFieldErrors, setInputFieldErrors] = useState({
    username: false,
    usertag: false,
    password: false,
    repeatPassword: false,
  });

  const [showCheck, setShowCheck] = useState({
    username: false,
    usertag: false,
    password: false,
    repeatPassword: false,
  });

  useEffect(() => {
    const checks = {
      username: false,
      usertag: false,
      password: false,
      repeatPassword: false,
    };

    for (const inputField of inputFields) {
      const fieldName = inputField.name;
      const fieldValue = newUserData[fieldName as keyof typeof newUserData];
      const isValid = validateRegistration(fieldName, fieldValue, newUserData);

      checks[fieldName as keyof typeof newUserData] = isValid;
    }

    setShowCheck(checks);
  }, [newUserData]);

  const handleRegister = () => {
    const tempErrors = {
      username: false,
      usertag: false,
      password: false,
      repeatPassword: false,
    };

    for (const inputField of inputFields) {
      const fieldName = inputField.name;
      const fieldValue = newUserData[fieldName as keyof typeof newUserData];
      const isValid = validateRegistration(fieldName, fieldValue, newUserData);

      if (!isValid) {
        tempErrors[fieldName as keyof typeof tempErrors] = true;
      }
    }

    setInputFieldErrors(tempErrors);

    if (Object.values(tempErrors).includes(true)) {
      return;
    }
  };

  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'} mt={5}>
      <Typography variant={'h2'} fontWeight={'bold'} textAlign={'center'} mb={3}>
        Register
      </Typography>
      <StyledRegisterBox>
        {inputFields.map((inputField, index) => {
          return (
            <InputField
              key={index}
              label={inputField.label}
              value={newUserData[inputField.name as keyof typeof newUserData]}
              type={inputField.type}
              error={inputFieldErrors[inputField.name as keyof typeof inputFieldErrors]}
              showCheck={showCheck[inputField.name as keyof typeof showCheck]}
              onChange={(e) => {
                setNewUserData({ ...newUserData, [inputField.name]: e.target.value });
                setInputFieldErrors({ ...inputFieldErrors, [inputField.name]: false });
              }}
              name={inputField.name}
            />
          );
        }
        )}
        <Box>
          <Typography fontSize={'0.8rem'}>Password must contain at least 8 characters, an uppercase and lowercase letter and at least one digit</Typography>
        </Box>
        <Button variant='contained' fullWidth onClick={() => handleRegister()}>Register</Button>
        <Typography variant={'body2'} textAlign={'center'}>
          Have an account? <StyledLink href={'/login'}>Login</StyledLink>
        </Typography>
      </StyledRegisterBox>
    </Box>
  );
};

export default RegisterPage;
