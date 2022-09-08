import { setUserOrigin } from "./userActions";
import userActionTypes from "./userTypes";

const userState = {
  // token: null,
  //uuid: null,
  //email: null,
  phone_number: "",
  origin: "",
  destination: "",
};

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

export default userReducer;
