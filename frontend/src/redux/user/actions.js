import axios from "axios";


import { GET_CART_DATA, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actionType";


export const PostCartSuccess = (payload) => {
    return { type: GET_CART_DATA, payload };
};
//User Sign Up
export const forSignup = (signupData) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    return axios.post(`https://weak-ruby-bull-wear.cyclic.app/user/register`, signupData).then((res) => {
        console.log(res);
        dispatch({ type: SIGNUP_SUCCESS });
        return true;
    }).catch((err) => {
        dispatch({ type: SIGNUP_FAILURE });
        console.log(err);
    })
}

//User Login 
export const forLogin = (loginData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios.post(`https://weak-ruby-bull-wear.cyclic.app/user/login`, loginData).then((res) => {
        console.log(res);
        dispatch({ type: LOGIN_SUCCESS });
        localStorage.setItem("token", JSON.stringify(res.data.token))
        localStorage.setItem("userId", JSON.stringify(res.data.userId))
        return true;
    }).catch((err) => {
        dispatch({ type: LOGIN_FAILURE });
        console.log(err);
    })
}

//get cart Items 
export const getCartItems = () => (dispatch) => {
    let token = JSON.parse(localStorage.getItem("token"))
    let id = JSON.parse(localStorage.getItem("userId"))

    console.log(token, id)
    return axios.get(`https://weak-ruby-bull-wear.cyclic.app/cart/${id}`, {
        headers: {
            Authorization: token,
        }
    }).then((res) => {
        dispatch(PostCartSuccess(res.data.cartData));
        console.log(res.data, "line 43")
        return res.data.cartData;
    }).catch((err) => {
        console.log(err);
    })
}

export const updateQuantity = (Q, id) => (dispatch) => {
    let obj = {
        quantity: Q
    }
    const token = JSON.parse(localStorage.getItem("token"))

    return axios.patch(`https://weak-ruby-bull-wear.cyclic.app/cart/update/${id}`, obj, {
        headers: {
            Authorization: token,
        }
    })
        
    




}

//Delete cart items
export const deleteCartItem = (id) => (dispatch) => {
    const token = JSON.parse(localStorage.getItem("token"))
    return axios.delete(`https://weak-ruby-bull-wear.cyclic.app/cart/delete/${id}`, {
        headers: {
            Authorization: token,
        }
    })
}

//Clear all items from cart


//Add orders
export const addOrder = (orderData, id) => (dispatch) => {
    axios.post(`https://weak-ruby-bull-wear.cyclic.app/order/add/${id}`, orderData).then((res) => {

    }).catch((err) => {
        console.log(err);
    })
}

//Toast 
export const forToast = (toast, title, status) => {
    toast({
        position: "top",
        title: title,
        variant: 'left-accent',
        status: status,
        duration: 3000,
        isClosable: true,
    });
};
