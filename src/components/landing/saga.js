import { takeEvery } from "redux-saga/effects";
import * as actions  from "./action.types";
import * as SagaApi  from "./saga.api";

export function* landingActions() {
	yield takeEvery(actions.FETCH_DATA, SagaApi.fetchData);
}
