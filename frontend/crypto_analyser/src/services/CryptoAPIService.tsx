import { axiosInstance } from "../config";

export const fetchAllCryptoCoins = async () => {
	const URI = `https://api.coincap.io/v2/assets`;

	const response = await axiosInstance.get(URI);
	if(response.status === 200) 
		return response.data
	else 
		throw new Error("Unable to fetch coins");

}

export const fetchInfoForCrypto = async (cryptoName: string) => {
	const URI = `https://api.coincap.io/v2/assets/${cryptoName}`;
	// console.log(URI);

	return axiosInstance.get(URI).then((res) => {
		return res.data;
	});
};

export const fetchRatesForCrypto = async (cryptoName: string) => {
	const URI = `https://api.coincap.io/v2/rates/${cryptoName}`;
	// console.log(URI);

	return axiosInstance.get(URI).then((res) => {
		return res.data;
	});
};
