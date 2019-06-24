import * as actionType from "./action.types";

const initialState = {
	data: null,
};

// reducers
export default function(state = initialState, action) {
	switch (action.type) {
		case actionType.SET_DATA:
			return setData(state, action.payload);
		default:
			return state;
	}
}

const setData = (state, payload) => {
	return {
		...state,
		data: payload
	};
};
