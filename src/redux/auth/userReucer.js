import userActionTypes from "./userTypes";

// initialState for user information
const userState = {
  // token: null,
  //uuid: null,
  //email: null,
  phone_number: "",
  origin: "",
  destination: "",
};
// initialState for user information

//Reducer for user information
const userReducer = (state = userState, action) => {
  switch (action.type) {
    case userActionTypes.SET_NUMBER:
      return {
        ...state,
        phone_number: action.payload,
      };
    case userActionTypes.SET_ORIGIN:
      return {
        ...state,
        origin: action.payload,
      };
    case userActionTypes.SET_DESTINATION:
      return {
        ...state,
        destination: action.payload,
      };
    default:
      return state;
  }
};
//Reducer for user information

//exports
export default userReducer;
export const selectUserState = (state) => state
//exports