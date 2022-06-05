import React from 'react';
import Link from "next/link"

import { Box, Container, Typography } from "@mui/material";

const clients = [
	{ id: "Jose", name: "Joseph Sam" },
	{ id: "Strike", name: "Fun Strike" },
	{ id: "Exotic", name: "Exotic Wit" },
]

const Clients = () => {
	return (
		<Box>
			<Container maxwidth="xl">
				<Typography variant="h2">
					This is the Clients Page
				</Typography>
				<Typography variant="body1">
					Lorem ipsum Text Generator
				</Typography>
				<ul>

					{
						clients.map((el, i) => (
							<li key={i}>
								<Link href={`/client/${el.id}`}>{el.name}</Link>
							</li>
						))
					}

					{/* ALTERNATIVELY */}
					<br/>
					<hr/>
					<br/>
					{
						clients.map((el, i) => (
							<li key={i}>
								<Link href={{
									pathname: "/client/[id]",
									query: { id: el.id }
								}}>
									{el.name}
								</Link>
							</li>
						))
					}
				</ul>
			</Container>
		</Box>
	)
}

export default Clients