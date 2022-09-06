import userActionTypes from "./userTypes";
export const setUserNumber = (phone_number) => ({
  type: userActionTypes.SET_NUMBER,
  payload: phone_number,
});
export const setUserOrigin = (origin) => ({
  type: userActionTypes.SET_ORIGIN,
  payload: origin,
});
export const setUserDestination = destination => ({
  type: userActionTypes.SET_DESTINATION,
  payload: destination,
});
