import { put }      from "redux-saga/effects";
import axios        from "axios";
import * as actions from "./actions";

export function* fetchData(action) {
	try {
		const response = yield axios.get("https://jsonplaceholder.typicode.com/photos");
		yield put(actions.setData(response.data));
	}
	catch (e) {
		console.log("error : ", e);
	}
}
