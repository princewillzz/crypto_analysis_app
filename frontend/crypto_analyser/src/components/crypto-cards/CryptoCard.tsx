import { Card, CardContent, Typography } from "@material-ui/core";
import React from "react";
import CountUp from "react-countup";
import { CoinData } from "../../interfaces/CoinData";
import "./CryptoCards.css";

interface CryptoCardProps {
	coin: CoinData,
	classNameString: string
}

export default function CryptoCard({ coin, classNameString }: CryptoCardProps) {
	// const [lastUpdatedAt, setLastUpdatedAt] = useState<String>();
	
	return (
		<Card
			className={`card ${classNameString}`}
		>
			<CardContent>
				<Typography color="textSecondary" gutterBottom>
					{coin.id}<span>({coin.symbol})</span>
				</Typography>

				<Typography variant="h5" gutterBottom>
					<CountUp
						prefix={(coin.currencySymbol || "UA") + " "}
						start={0}
						end={parseFloat(coin.rateUsd)}
						duration={1}
						separator=","
						decimals={3}
					/>
				</Typography>

				<Typography variant="body2" gutterBottom>
					<span className={"card-headline-text"}>Crypto Type:</span>
					{coin.type || "UA" }
				</Typography>

				{/* <Typography color="textSecondary" gutterBottom>
					{lastUpdatedAt}
				</Typography> */}
			</CardContent>
		</Card>
	);
}
