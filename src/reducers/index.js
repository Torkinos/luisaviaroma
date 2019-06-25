import { combineReducers } from "redux";

import landing from "../components/landing/reducer";

const rootReducer = combineReducers({
	landing,
});

export default rootReducer;
