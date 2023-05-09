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
export const getCartItems=(userID)=>(dispatch)=>{
   return axios.get(`https://unusual-gold-button.cyclic.app/cart/${userID}`).then((res)=>{
        return res.cartData;
    }).catch((err)=>{
        console.log(err);
    })
}

//Delete cart items
export const deleteCartItem=(id)=>(dispatch)=>{
    const token=JSON.parse(localStorage.getItem("token"))
    axios.delete(`https://unusual-gold-button.cyclic.app/cart/delete/${id}`,{
        headers: {
          Authorization: token,
        }}).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
}

//Clear all items from cart


//Add orders
export const addOrder=(orderData)=>(dispatch)=>{
    axios.post(`https://unusual-gold-button.cyclic.app/`,orderData).then((res)=>{

    }).catch((err)=>{
        console.log(err);
    })
}

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
  