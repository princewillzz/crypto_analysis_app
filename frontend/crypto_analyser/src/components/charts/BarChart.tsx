import React, { useCallback, useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { fetchInfoForCrypto } from "../../services/CryptoAPIService";
import "./Charts.css";

interface BarChartProps {
	coinList: string[]
}

export default function BarChart({ coinList }: BarChartProps) {
	// const [data, setData] = useState(new Map());
	const [data, setData] = useState<any>({});

	const loadData = useCallback(async () => {
		coinList?.forEach((coin) => {
			fetchInfoForCrypto(coin)
				.then((responseData) => {
					setData((data:any) => {
						if (
							data[coin]?.priceUsd !==
							responseData?.data?.priceUsd
						)
							return { ...data, [coin]: responseData.data };
						else return data;
					});
				})
				.catch((e) => {
					// console.log(e);
				});
		});
	}, [coinList]);

	useEffect(() => {
		loadData().catch((e) => console.log(e));
		// Set an interval to refresh information after every 30 seconds
		// const coinInfoloadingInterval = setInterval(() => {
		// 	loadData().catch((e) => console.log(e));
		// }, 1000 * 30);

		return () => {
			// clearInterval(coinInfoloadingInterval);
		};
	}, [coinList, loadData]);

	const loadPriceList = () => {
		return coinList?.map((coin) => {
			const coinInfo = data[coin];
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
