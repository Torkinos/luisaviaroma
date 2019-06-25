import { createSelector } from "reselect";

const data = state => state.landing.data;

export const getData = createSelector(
	[data],
	data => {
		if (data) {
			return data;
		}

		return null;
	}
);
