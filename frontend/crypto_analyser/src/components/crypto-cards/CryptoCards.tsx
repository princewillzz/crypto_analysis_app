import { SearchOutlined } from '@ant-design/icons';
import { InputAdornment, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React, { useState } from "react";
import { CoinData } from "../../interfaces/CoinData";
import CryptoCard from "./CryptoCard";
import "./CryptoCards.css";



interface CryptoCardsProps {
	coins: CoinData[]
}

const CardclassNames:string[] = ["infected", "recovered", "deaths", "hotpink"]


const useStyles = makeStyles((theme) => ({
	searchBox: {
		width: 300,
		maxWidth: '90vw',
		backgroundColor: "#fff",
		borderRadius: 5,
	},
	searchIcon: {
		fontSize: 20
	}
}))

const CryptoCards = ({ coins }: CryptoCardsProps) => {

	const classes = useStyles();

	const [searchValue, setSearchValue] = useState<string>('');


	const _coinFilter = (_coin:CoinData) => {
		let isValidFilter = false;

		const searchValueLowerCase: string = searchValue.toLowerCase();

		// filter on name/id
		isValidFilter = _coin.id.toLowerCase().indexOf(searchValueLowerCase) !== -1;

		// filter on symbol
		if(!isValidFilter) {
			isValidFilter = _coin.symbol.toLowerCase().indexOf(searchValueLowerCase) !== -1;
		}

		// filter on currencysymbol
		if(!isValidFilter && _coin.symbol) {
			isValidFilter = _coin.symbol.indexOf(searchValue) !== -1;
		}

		return isValidFilter;
	}

	return (
		<>
			<div className="search-box-container">
				<TextField
					placeholder="Search Coins"
					InputProps={{
					startAdornment: (
						<InputAdornment position="start">
							<SearchOutlined className={classes.searchIcon} />
						</InputAdornment>
					),
					}}
					variant="outlined"
					className={classes.searchBox}
					value={searchValue}
					onChange={(e:any) => setSearchValue(e.target.value)}
				/>
			</div>

			<div className={"cards-container"}>
				{
				coins
					.filter(_coinFilter)
					.map((_coin, index) => (
						<CryptoCard key={index} coin={_coin} classNameString={CardclassNames[index%CardclassNames.length]} />
					))
				}
			</div>

		</>
	);
};



export default CryptoCards;
