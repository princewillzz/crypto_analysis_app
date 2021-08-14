import { FormControl, NativeSelect } from "@material-ui/core";
import React from "react";
import "./CoinPicker.css";

const CoinPicker = ({ coinList, handleCoinChange }) => {
	const optionsOfCoins = () => {
		const list = coinList.map((coin, index) => {
			return (
				<option key={index} value={coin}>
					{coin}
				</option>
			);
		});

		return list;
	};

	return (
		<FormControl color={"secondary"} className={"formControl"}>
			<NativeSelect
				defaultValue=""
				onChange={(e) => handleCoinChange(e.target.value)}
			>
				<option value="">Select</option>
				{optionsOfCoins()}
			</NativeSelect>
		</FormControl>
	);
};

export default CoinPicker;
