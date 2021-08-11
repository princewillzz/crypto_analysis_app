import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import CryptoCard from "./CryptoCard";
import "./CryptoCards.css";

const CryptoCards = () => {
	const [lastUpdatedAt, setLastUpdatedAt] = useState();

	useEffect(() => {
		setLastUpdatedAt(new Date(Date.now()).toDateString());
	}, []);

	const loadData = async () => {};

	console.log(lastUpdatedAt);

	return (
		<div className={"cards-container"}>
			<Grid
				container
				// spacing={3}
				justifyContent="center"
			>
				<CryptoCard />
			</Grid>
		</div>
	);
};

export default CryptoCards;
