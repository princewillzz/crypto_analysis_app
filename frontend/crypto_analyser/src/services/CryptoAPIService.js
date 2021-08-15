import { axiosInstance } from "../config";

export const fetchInfoForCrypto = async (cryptoName) => {
	const URI = `https://api.coincap.io/v2/assets/${cryptoName}`;
	// console.log(URI);

	return axiosInstance.get(URI).then((res) => {
		return res.data;
	});
};

export const fetchRatesForCrypto = async (cryptoName) => {
	const URI = `https://api.coincap.io/v2/rates/${cryptoName}`;
	// console.log(URI);

	return axiosInstance.get(URI).then((res) => {
		return res.data;
	});
};
