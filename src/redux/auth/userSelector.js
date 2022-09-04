import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectUserNumber = createSelector(
  [selectUser],
  (user) => user.phone_number
);

export const selectUserOrigin = createSelector(
  [selectUser],
  (user) => user.origin
);

export const selectUserDestination = createSelector(
  [selectUser],
  (user) => user.destination
);
