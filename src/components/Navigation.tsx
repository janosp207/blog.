'use client';

import { Box, Typography, styled, Button } from '@mui/material';
import { PATHS } from '@/paths';
import Link from 'next/link';
import { getUser } from '@/utils/utils';
import { useState, useEffect } from 'react';
import { User } from '@/classes/User';

const StyledNavBox = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '1rem 2rem',
	margin: '1rem auto',
	boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
	borderRadius: '100px',
	width: '60%',
	'@media (max-width: 750px)': {
		width: '100%',
	},
})

const StyledFlexBox = styled(Box)({
	display: 'flex',
	gap: '1.5rem',
	alignItems: 'center',
})

const Navigation = (): JSX.Element => {
	const [user, setUser] = useState<User>();

	useEffect(() => {
		setUser(getUser());
	}, []);

	const handleLogout = () => {
		localStorage.removeItem('username');
		localStorage.removeItem('usertag');
		localStorage.removeItem('id');
		localStorage.removeItem('token');

		setUser(undefined);
		window.location.href = PATHS.LOGIN;
	};

	return (
		<StyledNavBox>
			<Typography variant="h5" fontWeight='bold'>Blog:;</Typography>
			<StyledFlexBox>
				<Link href={PATHS.HOME}><Typography>Home</Typography></Link>
				{user ? 
					<Typography sx={{ cursor: 'pointer' }} onClick={() => handleLogout()}>Logout</Typography>:
					<Link href={PATHS.LOGIN}>
						<Typography>Login</Typography>
					</Link>
				}
				{user &&
					<Link href={PATHS.CREATE.replace(':id', user.id)}>
						<Button>CREATE.</Button>
					</Link>
				}
			</StyledFlexBox>
		</StyledNavBox>
	);
}

export default Navigation;