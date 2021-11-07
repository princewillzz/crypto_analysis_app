import { axiosInstance } from "../config";

export const fetchAllCryptoCoins = async () => {
	const URI = `/assets`;

	const response = await axiosInstance.get(URI);
	if(response.status === 200) 
		return response.data
	else 
		throw new Error("Unable to fetch coins");

}

export const fetchInfoForCrypto = async (cryptoName: string) => {
	const URI = `/assets/${cryptoName}`;
	// console.log(URI);

	return axiosInstance.get(URI).then((res) => {
		return res.data;
	});
};

export const fetchRatesForCrypto = async (cryptoName: string) => {
	const URI = `/rates/${cryptoName}`;
	// console.log(URI);

	return axiosInstance.get(URI).then((res) => {
		return res.data;
	});
};

export const fetchCryptoHistoryData = async (coinId: string, timeline: string) => {
	const URI = `/assets/${coinId}/history?interval=${timeline}`;

	return axiosInstance
		.get(URI)
		.then(res => res.data)

}