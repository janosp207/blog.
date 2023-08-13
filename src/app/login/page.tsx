'use client';
import { PATHS } from '@/paths';
import { Box, TextField, Typography, styled, Button, CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { loginUser } from '@/api/users';

const StyledLoginBox = styled(Box)({
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

const LoginPage = (): JSX.Element => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  useEffect(() => {
    if (username.length >= 3) {
      setUsernameError(false);
    }

    if (password.length >= 3) {
      setPasswordError(false);
    }
  }, [username, password]);

  const handleLogin = async () => {
    setLoading(true);
    if (username.length < 3) {
      setUsernameError(true);
    }

    if (password.length < 3) {
      setPasswordError(true);
    }

    if (username.length < 3 && password.length < 3) {
      setLoading(false);
      return;
    }

    if (username.length >= 3 && password.length >= 3) {
      setUsernameError(false);
      setPasswordError(false);
      const data = await loginUser(username, password);

      if (data) {
        window.location.href = PATHS.HOME;
      }
    }
    
    setLoading(false);
  };

  return (
    <Box display={'flex'} alignItems={'center'} flexDirection={'column'} mt={5}>
      <Typography variant={'h2'} fontWeight={'bold'} textAlign={'center'} mb={3}>
        Login
      </Typography>
      <StyledLoginBox>
        <TextField label={'Username'} fullWidth error={usernameError} onChange={(e) => setUsername(e.target.value)} />
        <TextField label={'Password'} type='password' fullWidth error={passwordError} onChange={(e) => setPassword(e.target.value)} />
        <Button variant='contained' fullWidth onClick={() => handleLogin()}>{loading ? <CircularProgress size={24} color={'inherit'} /> : 'Log IN'}</Button>
        <Typography variant={'body2'} textAlign={'center'}>
          Don't have an account? <StyledLink href={PATHS.REGISTER}>Register</StyledLink>
        </Typography>
      </StyledLoginBox>
    </Box>
  );
};

export default LoginPage;
