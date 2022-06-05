import React from 'react';
import { useRouter } from "next/router";

import { Box, Container, Typography } from "@mui/material";

const SingleBlog = () => {

    const router = useRouter()
    console.log(router.query)

	return (
		<Box>
			<Container maxwidth="xl">
				<Typography variant="h2">
					This is a specific Blog Blog Page
				</Typography>
				<Typography variant="body1">
					Lorem ipsum Text Generator
				</Typography>
			</Container>
		</Box>
	)
}

export default SingleBlog