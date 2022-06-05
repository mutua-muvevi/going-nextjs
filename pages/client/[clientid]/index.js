import React from 'react'
import { useRouter } from "next/router";

import { Box, Button, Container, Typography } from "@mui/material";

const ClientID = () => {

	const router = useRouter()
	console.log(router.query)

	const loadClientWork = () => {
		// Load...
		router.push("/client/jose/projectforJose")
	}

	return (
		<Box>
			<Container maxwidth="xl">
				<Typography variant="h2">
					This is the ClientID Page
				</Typography>
				<Typography variant="body1">
					Lorem ipsum Text Generator
				</Typography>
				<Button onClick={loadClientWork} variant="contained">
					Load Clients Work
				</Button>
			</Container>
		</Box>
	)
}

export default ClientID