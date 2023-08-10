import { Box, Typography } from "@mui/material";

const Title = ({ text }: { text: string }) => {
	return (
		<Box textAlign='center' mt={5} mb={2}>
			<Typography variant="h6" fontWeight='bold'>{text}</Typography>
		</Box>
	)
}

export default Title