import React from "react";
import CryptoCard from "./CryptoCard";
import "./CryptoCards.css";

interface CryptoCardsProps {
	coins: string[]
}

const CryptoCards = ({ coins }: CryptoCardsProps) => {
	return (
		<div className={"cards-container"}>
			{coins.map((coinName, index) => (
				<CryptoCard key={index} cryptoName={coinName} />
			))}
		</div>
	);
};

export default CryptoCards;
