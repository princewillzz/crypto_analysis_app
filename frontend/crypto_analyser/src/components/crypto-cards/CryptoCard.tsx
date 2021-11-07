import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import CountUp from "react-countup";
import { CoinData } from "../../interfaces/CoinData";
import "./CryptoCards.css";


interface CryptoCardProps {
	coin: CoinData,
	classNameString: string
}

const useStyles = makeStyles((theme) => ({
	nameContainer: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		marginBottom: 10
	},
	colorGrowth: {
		color: "green"
	},
	colorLoss: {
		color: "red"
	},
	GrowthSpan: {
		fontSize: 16
	}
}))

export default function CryptoCard({ coin, classNameString }: CryptoCardProps) {
	// const [lastUpdatedAt, setLastUpdatedAt] = useState<String>();
	const classes = useStyles();
	
	const _getNumberInRounded = (number:any) => {
		try {
			if(!number) throw new Error("UNK");
			return parseInt(number).toFixed(2);
		} catch (error) {
			return "UNK";
		}
	}

	const _renderGrowthIndicator = () => {

		if(!coin.changePercent24Hr) return ;

		let isPositive = parseInt(coin.changePercent24Hr) >= 0;


		return (
			<span className={`${isPositive? classes.colorGrowth: classes.colorLoss} ${classes.GrowthSpan}`}>
				({isPositive && '+'}{_getNumberInRounded(coin.changePercent24Hr)}){isPositive? <ArrowUpOutlined />: <ArrowDownOutlined />}
			</span>
		)
		
	}


	return (
		<Card
			className={`card ${classNameString}`}
		>
			<CardContent>
				<Box display="flex" justifyContent="space-between" >
					<Typography color="textSecondary" gutterBottom>
						{coin.id}<span>({coin.symbol})</span>
					</Typography>
					<Typography color="textSecondary" gutterBottom>
						Rank<span>*{coin.rank}</span>
					</Typography>
				</Box>

				<Typography variant="h5" gutterBottom className={classes.nameContainer}>
					<CountUp
						prefix={(coin.symbol || "UA") + " "}
						start={0}
						end={parseFloat(coin.priceUsd)}
						duration={1}
						separator=","
						decimals={3}
					/>
					{_renderGrowthIndicator()}
				</Typography>

				<Typography variant="body2" gutterBottom>
					<span className={"card-headline-text"}>Market Cap:</span>
					${_getNumberInRounded(coin.marketCapUsd) }
				</Typography>

				<Typography variant="body2" gutterBottom>
					<span className={"card-headline-text"}>Trade Vol.(24 hr):</span>
					${_getNumberInRounded(coin.volumeUsd24Hr) }
				</Typography>

				{/* <Typography color="textSecondary" gutterBottom>
					{lastUpdatedAt}
				</Typography> */}
			</CardContent>
		</Card>
	);
}
