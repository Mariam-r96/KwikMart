import { coreAxios } from "../utils/axios";

export const SET_USER = "SET_USER";
export const USER_NOT_FOUND = "USER_NOT_FOUND";

const initialState = {
	user: null,
};

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case SET_USER:
			return { ...state, user: action.payload };
		case USER_NOT_FOUND:
			return { ...state, user: null };
		default:
			return state;
	}
}

export const getUser = () => {
	return (dispatch) => {
		coreAxios
			.get("/api/user")
			.then((res) => {
				dispatch({
					type: SET_USER,
					payload: res.data,
				});
			})
			.catch((err) => {
				dispatch({
					type: USER_NOT_FOUND,
				});
			});
	};
};

