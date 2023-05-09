import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

const initalState = {
    isLoading: false,
    isError: false,
    isAuth: localStorage.getItem("token") != undefined ? true : false,
  };
  
  export const reducer = (state = initalState, { type, payload }) => {
    switch (type) {
      case LOGIN_REQUEST:
        return { ...state, isLoading: true };
      case LOGIN_SUCCESS:
        return { ...state, isLoading: false, isAuth: true };
      case LOGIN_FAILURE:
        return { ...state, isLoading: false, isError: true };
        
        case SIGNUP_REQUEST:
        return { ...state, isLoading: true };
      case SIGNUP_SUCCESS:
        return { ...state, isLoading: false };
      case SIGNUP_FAILURE:
        return { ...state, isLoading: false, isError: true };
      default:
        return state;
    }
  };