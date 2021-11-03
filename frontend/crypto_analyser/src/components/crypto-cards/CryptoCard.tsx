import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import React, { useCallback, useEffect, useState } from "react";
import CountUp from "react-countup";
import { fetchInfoForCrypto } from "../../services/CryptoAPIService";
import "./CryptoCards.css";

interface CryptoCardProps {
	cryptoName: string
}

export default function CryptoCard({ cryptoName }: CryptoCardProps) {
	const [lastUpdatedAt, setLastUpdatedAt] = useState<String>();

	const [coinInfo, setCoinInfo] = useState<any>();

	const loadData = useCallback(async () => {
		// console.clear();
		try {
			const coinInfo = await fetchInfoForCrypto(cryptoName);

			// console.log(coinInfo.data);
			setCoinInfo(coinInfo.data);

			setLastUpdatedAt(new Date(coinInfo.timestamp).toLocaleString());
		} catch (error) {}
	}, [cryptoName]);

	useEffect(() => {
		// Load for the first time

		loadData().catch((e) => console.log(e));

		// Set an interval to refresh information after every 30 seconds
		const coinInfoloadingInterval = setInterval(() => {
			loadData().catch((e) => console.log(e));
		}, 1000 * 30);

		return () => {
			clearInterval(coinInfoloadingInterval);
		};
	}, [cryptoName, loadData]);

	// console.log(coinInfo.priceUsd);
	return (
		<Grid
			spacing={3}
			container
			item
			component={Card}
			xs={12}
			zeroMinWidth
			md={4}
			className={"card infected"}
		>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					{cryptoName}
				</Typography>

				<Typography variant="h5" gutterBottom>
					<CountUp
						prefix={"$"}
						start={0}
						end={coinInfo?.priceUsd}
						duration={1}
						separator=","
						decimals={3}
					/>
				</Typography>

				<Typography variant="body2" gutterBottom>
					<span className={"card-headline-text"}>VolumeUsd24Hr:</span>
					{coinInfo?.volumeUsd24Hr ? (
						<CountUp
							start={0}
							end={coinInfo?.volumeUsd24Hr}
							duration={1}
							separator=","
							decimals={3}
						/>
					) : (
						"UA"
					)}
				</Typography>

				<Typography variant="body2" gutterBottom>
					<span className={"card-headline-text"}>
						changePercent24Hr
					</span>

					{/* {coinInfo?.changePercent24Hr || "UA"} */}
					{coinInfo?.changePercent24Hr ? (
						<CountUp
							start={0}
							end={coinInfo?.changePercent24Hr}
							duration={1}
							separator=","
							decimals={3}
						/>
					) : (
						"UA"
					)}
				</Typography>

				<Typography color="textSecondary" gutterBottom>
					{lastUpdatedAt}
				</Typography>
			</CardContent>
		</Grid>
	);
}
