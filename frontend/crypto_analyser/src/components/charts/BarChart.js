import React, { useEffect, useState } from "react";
import { useCallback } from "react";
import { Bar } from "react-chartjs-2";
import {
	fetchInfoForCrypto,
	fetchRatesForCrypto,
} from "../../services/CryptoAPIService";
import "./Charts.css";

export default function BarChart({ coinList }) {
	// const [data, setData] = useState(new Map());
	const [data, setData] = useState({});

	const loadData = useCallback(async () => {
		console.clear();
		console.log("Fetching rates for each of them");
		coinList?.forEach((coin) => {
			fetchInfoForCrypto(coin)
				.then((responseData) => {
					setData((data) => {
						return { ...data, [coin]: responseData.data };
					});
				})
				.catch((e) => {
					console.log(e);
				});
		});
	}, [coinList]);

	useEffect(() => {
		loadData().catch((e) => console.log(e));

		return () => {};
	}, [coinList, loadData]);

	const loadPriceList = () => {
		return coinList?.map((coin) => {
			const coinInfo = data[coin];
			console.log(coin, coinInfo);
			return coinInfo?.priceUsd || 0;
		});
	};

	const datasets = [
		{
			backgroundColor: ["pink", "blue", "red"],
			data: loadPriceList(),
		},
	];

	const barChart = (
		<Bar
			data={{
				labels: coinList,
				datasets: datasets,
			}}
			options={options}
		/>
	);

	return (
		<>
			<div className="container">{barChart}</div>
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
			},
			stacked: true,
		},
	},
};
