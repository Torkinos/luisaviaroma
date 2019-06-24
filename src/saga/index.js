import { all, fork } from "redux-saga/effects";

import * as landingSagas from "../components/landing/saga";

export default function* rootSaga() {
	yield all([
		...Object.values(landingSagas),
	].map(fork));
}
