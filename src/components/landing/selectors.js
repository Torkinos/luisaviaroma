import { createSelector } from "reselect";

const bookingId        = state => state.guestWindow.id;
const bookingDiscounts = state => state.guestPayment.bookingDiscounts;
const totalDiscounts   = state => state.guestPayment.totalDiscounts;
const roomsPay         = state => state.guestPayment.roomsPay;
const unpaidItems      = state => state.guestPayment.unpaidItems;
const guests           = state => state.guestForm.guests;

export const getBookingId = createSelector(
	[bookingId],
	bookingId => {
		if (bookingId) {
			return bookingId;
		}
		return false;
	}
);

export const getDiscountsAndItems = createSelector(
	[bookingDiscounts, totalDiscounts, roomsPay, unpaidItems],
	(bookingDiscounts, totalDiscounts, roomsPay, unpaidItems) => {
		return {
			bookingDiscounts, totalDiscounts, roomsPay, unpaidItems
		};
	}
);

export const getBlacklist = createSelector(
	[guests],
	guests => {
		if (guests) {
			return guests.some(i => i.item.name.blacklist);
		}
		return false;
	}
);

export const getReturned = createSelector(
	[guests],
	guests => {
		if (guests) {
			return guests[0].returned;
		}
		return false;
	}
);
