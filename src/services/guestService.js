import guests from "../data/guest-list.json";

export const getGuests = () => guests;

export const getGuestsByType = (type) => {
    return guests.filter(guest => guest.type === type);
};