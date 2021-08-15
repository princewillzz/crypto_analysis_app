import axios from "axios";
import axiosRetry from "axios-retry";

export const axiosInstance = axios.create({
	baseURL: "https://api.coincap.io/v2/",
	timeout: 10000,
});

axiosRetry(axiosInstance, { retries: 3 });
