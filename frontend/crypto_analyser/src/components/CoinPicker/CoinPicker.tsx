import { FormControl, makeStyles, MenuItem, Select } from "@material-ui/core";
import React from "react";
import { CoinData } from "../../interfaces/CoinData";

interface CoinPickerProps {
	coinList: CoinData[],
	handleCoinChange: Function
}


const useStyle = makeStyles((theme:any) => ({
	container: {
		marginTop: "3rem",
		width: 400,
		marginBottom: '30px !important',
		background: '#fff',
		'@media (max-width:780px)': {
			maxWidth: '80vw',
		},

	},
	selectBox: {
		maxHeight: 100,
		paddingLeft: 10
	}
}))

const CoinPicker = ({ coinList, handleCoinChange }: CoinPickerProps) => {

	const classes = useStyle();

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

			<FormControl 
				fullWidth 
				className={classes.container}
			>
				<Select
					labelId="demo-simple-select-label"
					id="demo-simple-select"
					onChange={(e) => handleCoinChange(e.target.value)}
					defaultValue={-1}
					className={classes.selectBox}
				>
					<MenuItem value={-1}>
						Select a Coin
					</MenuItem>
					{optionsOfCoins()}
				</Select>
			</FormControl>
		</>
	);
};

export default CoinPicker;
