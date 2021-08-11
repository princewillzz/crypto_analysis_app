import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import "./CryptoCards.css";

export default function CryptoCard({ cryptoName, lastUpdatedAt }) {
	return (
		<Grid item component={Card} xs={12} md={3} className={"card infected"}>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					cryptoName
				</Typography>

				<Typography variant="h5" gutterBottom>
					{" "}
					<CountUp
						start={0}
						end={!100 ? 0 : 122}
						duration={2.5}
						separator=","
					/>
				</Typography>
				<Typography color="textSecondary" gutterBottom>
					{" "}
					{lastUpdatedAt}
				</Typography>
				<Typography variant="body2" gutterBottom>
					{" "}
				</Typography>
			</CardContent>
		</Grid>
	);
}
