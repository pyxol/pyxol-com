"use client";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Alert from "react-bootstrap/Alert";

import ArtItem from "./ArtItem";

export default function ArtPage({ art_items }) {
	return(<>
		<Container className="py-4">
			<h1 className="h1 mb-4">
				Art
			</h1>
			
			{art_items?.length ? (<>
				<Row>
					{art_items.map(art_item => {
						return (
							<div
								key={art_item.url}
								className="col-sm-3 mb-4"
							>
								<ArtItem
									item={art_item}
								/>
							</div>
						);
					})}
				</Row>
			</>):(<>
				<Alert
					variant="info"
					className="text-center"
				>
					check back later for new art projects
				</Alert>
			</>)}
		</Container>
	</>);
}