import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";

//User Sign Up
export const forSignup=(signupData)=>(dispatch)=>{
    dispatch({type:SIGNUP_REQUEST});
    return axios.post(`https://unusual-gold-button.cyclic.app/user/register`,signupData).then((res)=>{
        console.log(res);
        dispatch({type:SIGNUP_SUCCESS});
        return true;
    }).catch((err)=>{
        dispatch({type:SIGNUP_FAILURE});
        console.log(err);
    })
}

//User Login 
export const forLogin=(loginData)=>(dispatch)=>{
    dispatch({type:LOGIN_REQUEST});
    return axios.post(`https://unusual-gold-button.cyclic.app/user/login`,loginData).then((res)=>{
        console.log(res);
        dispatch({type:LOGIN_SUCCESS});
        localStorage.setItem("token",JSON.stringify(res.token))
        return true;
    }).catch((err)=>{
        dispatch({type:LOGIN_FAILURE});
        console.log(err);
    })
}

//get cart Items 


//Delete cart items


//Clear all items from cart


//

//Toast 
export const forToast = (toast, title, status) => {
    toast({
      position: "top",
      title: title,
      variant:'left-accent',
      status: status,
      duration: 3000,
      isClosable: true,
    });
  };
  