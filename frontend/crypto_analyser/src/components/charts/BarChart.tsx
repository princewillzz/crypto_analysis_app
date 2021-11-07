import { ArrowDownOutlined, ArrowUpOutlined, MinusSquareOutlined, PlusSquareOutlined } from "@ant-design/icons";
import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Bar } from "react-chartjs-2";
import { CoinData } from "../../interfaces/CoinData";
import "./Charts.css";

interface BarChartProps {
	coinList: CoinData[],
	positiveGrowth: boolean,
	toggleGrowthDirection: Function,
	incrementCoins: Function,
	decrementCoins: Function
}

const useStyles = makeStyles((theme) => ({
	heading: {
		color: "#fff", 
	},
	numberChangeIcon: {
		fontSize: 25,
		marginInline: 8
	},
	
}))

export default function BarChart({ coinList, positiveGrowth, toggleGrowthDirection, incrementCoins, decrementCoins }: BarChartProps) {

	const classes = useStyles();

	const datasets = [
		{
			backgroundColor: ["pink", "blue", "red", "hotpink", "rgb(133, 235, 138)", "rgb(245, 235, 177)"],
			data: coinList
				?.map((_coin) => _coin.changePercent24Hr)
		},
	];

	const barChart = (
		<Bar
			data={{
				labels: coinList.map(_coin => _coin.id),
				datasets: datasets,
			}}
			options={options}
		/>
	);

	const _loadHeading = () => {

		return (
			<Typography variant="h4" align="center" className={classes.heading}>
				Top 
				<span>
					<MinusSquareOutlined 
						onClick={() => decrementCoins()}
						className={classes.numberChangeIcon}
						style={{ color: "red" }} 
					/>
					{coinList.length} 
					<PlusSquareOutlined 
						onClick={() => incrementCoins()}
						className={classes.numberChangeIcon}
						style={{ color: "greenyellow" }} 
					/>
				</span>
				{ positiveGrowth? "High ": "Low " } 
				Growth Coins 
				<span>
				{
					positiveGrowth?
					<ArrowUpOutlined onClick={() => toggleGrowthDirection()} style={{ color: "green" }} className={'growthToggleIcon'} />:
					<ArrowDownOutlined onClick={() => toggleGrowthDirection()} style={{ color: "red" }} className={'growthToggleIcon'} />
				}
				</span>
			</Typography>
		)

	}

	return (
		<>
			
			<div className="container">
				{_loadHeading()}
				{barChart}
			</div>
		</>
	);
}

const options = {
	plugins: {
		legend: {
			display: false,
		},
	},
	scales: {
		x: {
			ticks: {
				color: "#fff",
				
			},
		},
		y: {
			ticks: {
				color: "#fff",
				// callback: function(value:any, index:any, values:any) {
				// 	return '$' + value;
				// }
			},
			stacked: true,
		},
	},
};
