import userActionTypes from "./userTypes";

const INITIAL_STATE = {
  // token: null,
  //uuid: null,
  //email: null,
  phone_number: "989025235394",
  origin: "",
  destination: "",
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.payload) {
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

export default userReducer;
