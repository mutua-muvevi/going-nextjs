import React from 'react';

import { Box, Container, Typography } from "@mui/material";

const HomePage = () => {
	return (
		<Box>
			<Container maxwidth="xl">
				<Typography variant="h2">
					This is the homepage
				</Typography>
				<Typography variant="body1">
					Lorem ipsum Text Generator
				</Typography>
			</Container>
		</Box>
	)
}

export default HomePage