import axios from "axios";

export const coreAxios = axios.create({
	baseURL: "https://shodai.herokuapp.com",
});

coreAxios.interceptors.request.use(function (req) {
	let token = localStorage.getItem("token");

	if (token) {
		req.headers.authorization = "Bearer " + token;
	}

	return req;
});