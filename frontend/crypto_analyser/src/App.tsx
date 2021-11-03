import { useState } from "react";
import "./App.css";
import BarChart from "./components/charts/BarChart";
import LineChart from "./components/charts/LineChart";
import CoinPicker from "./components/CoinPicker/CoinPicker";
import CryptoCards from "./components/crypto-cards/CryptoCards";
import { useCoinsData } from "./hooks/useCoinsData";

function App() {
	const [coins] = useState<string[]>(["ethereum", "litecoin", "tron"]);

	const [selectedCoin, setSelectedCoin] = useState("");

	const handleCoinChangeFromCoinPicker = (coin:string) => {
		setSelectedCoin(coin);
	};

	return (
		<div className="App">
			<header className="App-header">Crypto Analyser</header>
			<CryptoCards coins={coins} />
			<CoinPicker
				coinList={coins}
				handleCoinChange={handleCoinChangeFromCoinPicker}
			/>

			{!selectedCoin ? (
				<BarChart coinList={coins} />
			) : (
				<LineChart selectedCoin={selectedCoin} />
			)}
		</div>
	);
}

export default App;
