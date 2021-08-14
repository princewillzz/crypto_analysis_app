import { useState } from "react";
import "./App.css";
import Charts from "./components/charts/Charts";
import CryptoCards from "./components/crypto-cards/CryptoCards";

function App() {
	const [coins] = useState(["ethereum", "litecoin", "tron"]);

	return (
		<div className="App">
			<header className="App-header">Crypto Analyser</header>
			<CryptoCards coins={coins} />
			<Charts coinList={coins} />
		</div>
	);
}

export default App;
