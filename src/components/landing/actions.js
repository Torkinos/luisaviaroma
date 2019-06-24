import * as actionType from "./action.types";

/*Saga actions*/
export const fetchData = () => {
	return { type: actionType.FETCH_DATA };
};

/*Actions*/
export const setData = payload => {
	return { type: actionType.SET_DATA, payload };
};

