import { useState } from "react";
import "./App.css";
import BarChart from "./components/charts/BarChart";
import LineChart from "./components/charts/LineChart";
import CoinPicker from "./components/CoinPicker/CoinPicker";
import CryptoCards from "./components/crypto-cards/CryptoCards";
import { useCoinsData } from "./hooks/useCoinsData";
import { CoinData } from "./interfaces/CoinData";

function App() {
	const [coins] = useState<string[]>(["ethereum", "litecoin", "tron"]);

	const coinsData:CoinData[] = useCoinsData();

	const [selectedCoin, setSelectedCoin] = useState<CoinData|null>();

	const handleCoinChangeFromCoinPicker = (selectedCoinId:string) => {
		console.log(selectedCoinId);
		
		setSelectedCoin(coinsData?.find(_coin => _coin.id === selectedCoinId))
	};

	console.log(selectedCoin);
	

	return (
		<div className="App">
			<header className="App-header">Crypto Analyser</header>
			
			<CoinPicker
				coinList={coinsData}
				selectedCoin={selectedCoin}
				handleCoinChange={handleCoinChangeFromCoinPicker}
			/>

			{!selectedCoin ? (
				<BarChart coinList={coins} />
			) : (
				<LineChart selectedCoin={selectedCoin.id} />
			)}

			<CryptoCards coins={coinsData} />

		</div>
	);
}

export default App;
