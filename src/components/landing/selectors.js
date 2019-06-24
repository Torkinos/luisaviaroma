import { createSelector } from "reselect";

const data = state => state.landing.data;

export const getData = createSelector(
	[data],
	data => {
		if (data) {
			return data.slice(0, 6);
		}
		return null;
	}
);
