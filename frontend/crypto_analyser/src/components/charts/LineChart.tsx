import {
	FormControl,
	FormControlLabel,
	makeStyles,
	Radio,
	RadioGroup
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Charts.css";

const useStyles = makeStyles((theme) => ({
	radioGroup: {
		display: "flex",
		flexDirection: "row",
		justifyContent: "center",
	},
	timelineRadioSelectBtn: {
		marginTop: 35,
	},
	formControlRadioSelect: {
		color: "#fff",
	},
}));

interface LineChartProps {
	selectedCoin: string
}

export default function LineChart({ selectedCoin }: LineChartProps) {
	const classes = useStyles();

	const [data, setData] = useState([]);

	const [selectTimeLine, setSelectTimeLine] = useState("h1");

	const handleSelectTimeLineChange = (e: any) => {
		setSelectTimeLine(e.target?.value);
	};

	useEffect(() => {
		// setData(tempdata.data);
		const URI = `https://api.coincap.io/v2/assets/${selectedCoin}/history?interval=${selectTimeLine}`;
		fetch(URI)
			.then((res) => res.json())
			.then((data) => setData(data.data))
			.catch(() => {});
	}, [selectedCoin, selectTimeLine]);

	const datasets = [
		{
			data: data?.map(({ priceUsd }) => priceUsd),
			label: selectedCoin,
			labelFontColor: "#fff",
			borderColor: "#ffbb3d",
			fill: false,
		},
	];

	const lineChart = data?.length ? (
		<Line
			data={{
				labels: data?.map(({ date }) =>
					new Date(date).toLocaleDateString()
				),
				datasets: datasets,
			}}
			options={options}
		/>
	) : null;

	return (
		<>
			<div className="container">
				{/* Line chart displaying the plotted points */}
				{lineChart}
				{/* Render select between different time views */}
				<FormControl
					margin={"dense"}
					className={classes.timelineRadioSelectBtn}
					component="fieldset"
				>
					<RadioGroup
						aria-label="timeline"
						name="timeline"
						className={classes.radioGroup}
						value={selectTimeLine}
						onChange={handleSelectTimeLineChange}
					>
						<FormControlLabel
							value="d1"
							control={<Radio />}
							label="Daily"
							className={classes.formControlRadioSelect}
						/>
						<FormControlLabel
							value="h1"
							control={<Radio />}
							label="Hourly"
							className={classes.formControlRadioSelect}
						/>
						<FormControlLabel
							value="m1"
							control={<Radio />}
							label="Montly"
							className={classes.formControlRadioSelect}
						/>
					</RadioGroup>
				</FormControl>
			</div>
		</>
	);
}

const options = {
	plugins: {
		legend: {
			labels: {
				color: "#fff",
				font: {
					size: 18,
				},
			},
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
			},
			stacked: true,
		},
	},
};
