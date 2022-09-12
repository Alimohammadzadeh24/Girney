//imports
import userActionTypes from "./userTypes";
//imports

//create functions for change user information in redux state 
export const setUserNumber = phone_number => {
  return {
    type: userActionTypes.SET_NUMBER,
    payload: phone_number,
  };
};
export const setUserOrigin = origin => {
  return {
    type: userActionTypes.SET_ORIGIN,
    payload: origin,
  };
};
export const setUserDestination = destination => {
  return {
    type: userActionTypes.SET_DESTINATION,
    payload: destination,
  };
};
//create functions for change user information in redux state 
