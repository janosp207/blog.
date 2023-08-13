"use client"

import { Box, Typography, styled, Button } from "@mui/material";
import { PATHS } from "@/paths";
import Link from "next/link";

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
	return (
		<StyledNavBox>
			<Typography variant="h5" fontWeight='bold'>Blog:;</Typography>
			<StyledFlexBox>
				<Link href={PATHS.HOME}><Typography>Home</Typography></Link>
				<Link href={PATHS.LOGIN}>
					<Typography>Login</Typography>
				</Link>
				<Link href={PATHS.CREATE}>
					<Button>CREATE.</Button>
				</Link>
			</StyledFlexBox>
		</StyledNavBox>
	);
}

export default Navigation;