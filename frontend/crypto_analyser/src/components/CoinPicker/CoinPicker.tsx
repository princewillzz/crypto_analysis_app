import { FormControl, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { CoinData } from "../../interfaces/CoinData";

interface CoinPickerProps {
	coinList: CoinData[],
	selectedCoin?: CoinData|null,
	handleCoinChange: Function
}


// const useStyle = makeStyles((theme:any) => ({
// 	container: {
// 		marginTop: "5rem",
// 		width: '30%',
// 		marginBottom: '30px !important',
// 		background: '#fff',
// 		'@media (max-width:780px)': {
// 			width: '70%',
// 		},
// 	},
// 	selectBox: {
// 		// margin: 10
// 	}
// }))

const CoinPicker = ({ coinList, handleCoinChange, selectedCoin }: CoinPickerProps) => {

	// const classes = useStyle();

	const optionsOfCoins = () => {
		const list = coinList
		.filter(coin => coin.id)
		.map((coin, index) => {
			return (
				<MenuItem key={index} value={coin.id}>
					{coin.id}
				</MenuItem>
			);
		});

		return list;
	};

	return (
		<>
		{/* <FormControl color={"secondary"} className={classes.container}>
			<NativeSelect
				defaultValue=""
				onChange={(e) => handleCoinChange(e.target.value)}
				className={classes.selectBox}
			>
				<option value="">Select</option>
				{optionsOfCoins()}
			</NativeSelect>
		</FormControl> */}

		<section style={{ width: 300 }}>
			<FormControl fullWidth style={{ backgroundColor: "white" }}>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					onChange={(e) => handleCoinChange(e.target.value)}
					value={selectedCoin?.id}
				>
					{optionsOfCoins()}
				</Select>
			</FormControl>
		</section>
		</>
	);
};

export default CoinPicker;
