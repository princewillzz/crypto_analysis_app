import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import CryptoCard from "./CryptoCard";
import "./CryptoCards.css";

const CryptoCards = ({ coins }) => {
	return (
		<div className={"cards-container"}>
			<Grid
				container
				// spacing={3}
				justifyContent="center"
			>
				{coins.map((coinName, index) => (
					<CryptoCard key={index} cryptoName={coinName} />
				))}
			</Grid>
		</div>
	);
};

export default CryptoCards;
