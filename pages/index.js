import React from 'react';
import Link from "next/link";

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
				<ul>
					<li>
						<Link href="/about">About</Link>
					</li>
					<li>
						<Link href="/portfolio">Portfolio</Link>
						
					</li>
					<li>
						<Link href="/client">Client</Link>

					</li>
					<li>
						<Link href="/blog">Blogs</Link>

					</li>
				</ul>
			</Container>
		</Box>
	)
}

export default HomePage