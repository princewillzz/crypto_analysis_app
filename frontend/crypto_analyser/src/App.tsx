import { Snackbar } from "@material-ui/core";
import { useState } from "react";
import "./App.css";
import BarChart from "./components/charts/BarChart";
import LineChart from "./components/charts/LineChart";
import CoinPicker from "./components/CoinPicker/CoinPicker";
import CryptoCards from "./components/crypto-cards/CryptoCards";
import { useCoinsData } from "./hooks/useCoinsData";
import { useTopGrowthCoins } from "./hooks/useTopGrowthCoins";
import { CoinData } from "./interfaces/CoinData";

function App() {

	const coinsData:CoinData[] = useCoinsData();

	const [selectedCoin, setSelectedCoin] = useState<CoinData|null>();

	const handleCoinChangeFromCoinPicker = (selectedCoinId:string) => {
		setSelectedCoin(coinsData?.find(_coin => _coin.id === selectedCoinId))
	};
	
	const [ growthCoinDirection, setGrowthCoinDirection ] = useState<boolean>(true);
	
	const [coinForBarChart, setCoinForBarChart] = useState<number>(5);
	
	const [snackbarOpen, setSnackbarOpen] = useState<boolean>(false);
	const [snackbarMessage, setSnackbarMessage] = useState<string>("")
	
	const handleIncrementCoin = () => {
		
		if(coinForBarChart > 14) {
			setSnackbarOpen(true)
			setSnackbarMessage("Cannot add more coins!!")
			return;
		} 

		setCoinForBarChart(coinForBarChart+1);
	}

	const handleDecrementCoin = () => {
		if(coinForBarChart < 4) {
			setSnackbarOpen(true)
			setSnackbarMessage("Cannot reduce more!!")
			return;
		}
		setCoinForBarChart(coinForBarChart-1);
	}
	
	const topGrowthCoins = useTopGrowthCoins(coinsData, growthCoinDirection, coinForBarChart);

	
	return (
		<div className="App">
			<header className="App-header">Crypto Analyser</header>
			
			<CoinPicker
				coinList={coinsData}
				handleCoinChange={handleCoinChangeFromCoinPicker}
			/>

			{!selectedCoin ? (
				<BarChart 
					coinList={growthCoinDirection? topGrowthCoins: topGrowthCoins.reverse()} 
					positiveGrowth={growthCoinDirection}	
					toggleGrowthDirection={() => setGrowthCoinDirection(!growthCoinDirection)}
					incrementCoins={handleIncrementCoin}
					decrementCoins={handleDecrementCoin}
				/>
			) : (
				<LineChart selectedCoin={selectedCoin.id} />
			)}

			<CryptoCards coins={coinsData} />

			<Snackbar
				autoHideDuration={10000}
				open={snackbarOpen}
				onClose={() => setSnackbarOpen(false)}
				anchorOrigin={{ vertical: 'top', horizontal: "center" }}
				message={snackbarMessage}
			/>
		</div>
	);
}

export default App;
