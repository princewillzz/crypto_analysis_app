import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "./Charts.css";
import { tempdata } from "../temdata";

export default function Charts({ coinList }) {
	const [data, setData] = useState([]);

	useEffect(() => {
		setData(tempdata.data);
		// fetch("https://api.coincap.io/v2/assets/bitcoin/history?interval=h1")
		// 	.then((res) => res.json())
		// 	.then((data) => setData(data.data))
		// 	.catch(() => {});
	}, []);

	console.log(data.length);

	const datasets = [
		{
			data: data.map(({ priceUsd }) => priceUsd),
			label: "Bitcoin",
			labelFontColor: "#fff",
			borderColor: "#ffbb3d",
			fill: false,
		},
	];

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
			},
		},
	};

	const lineChart = data.length ? (
		<Line
			data={{
				labels: data.map(({ date }) =>
					new Date(date).toLocaleDateString()
				),
				datasets: datasets,
			}}
			options={options}
		/>
	) : null;

	return <div className="container">{lineChart}</div>;
}
