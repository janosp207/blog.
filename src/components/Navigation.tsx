"use client"

import { Box, Typography, styled } from "@mui/material";

const StyledNavBox = styled(Box)({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '1rem 2rem',
	width: '60%',
	margin: '1rem auto',
	boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
	borderRadius: '100px',
})

const StyledFlexBox = styled(Box)({
	display: 'flex',
	gap: '1.5rem',
})

const Navigation = (): JSX.Element => {
	return (
		<StyledNavBox>
			<Typography variant="h5" fontWeight='bold'>Blog.</Typography>
			<StyledFlexBox>
				<Typography>Home</Typography>
				<Typography>Login</Typography>
			</StyledFlexBox>
		</StyledNavBox>
	);
}

export default Navigation;