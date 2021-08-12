import { axiosInstance } from "../config";

export const fetchInfoForCrypto = async (cryptoName) => {
	const URI = `https://api.coincap.io/v2/assets/${cryptoName}`;
	console.log(URI);

	return axiosInstance.get(URI).then((res) => {
		return res.data;
	});
};
