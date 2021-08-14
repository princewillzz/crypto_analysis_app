import { useState } from "react";
import "./App.css";
import Charts from "./components/charts/Charts";
import CoinPicker from "./components/CoinPicker/CoinPicker";
import CryptoCards from "./components/crypto-cards/CryptoCards";

function App() {
	const [coins] = useState(["ethereum", "litecoin", "tron"]);

	const [selectedCoin, setSelectedCoin] = useState("");

	const handleCoinChangeFromCoinPicker = (coin) => {
		console.log(coin);
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
			<Charts coinList={coins} selectedCoin={selectedCoin} />
		</div>
	);
}

export default App;
