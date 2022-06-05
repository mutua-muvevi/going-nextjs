import React from 'react'

import { Box, Container, Typography } from "@mui/material";

const About = () => {
	return (
		<Box>
			<Container maxwidth="xl">
				<Typography variant="h2">
					This is the about page
				</Typography>
				<Typography variant="body1">
					Lorem ipsum Text Generator
				</Typography>
			</Container>
		</Box>
	)
}

export default About