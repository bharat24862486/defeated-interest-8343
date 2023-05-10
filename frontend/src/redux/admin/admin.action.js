import axios from "axios";
import * as types from "./admin.actionType";
import { toast } from "react-hot-toast";
import { BiError } from "react-icons/bi";
import { getData } from "./ls";

export const getOrdersData = (dispatch) => {
  dispatch({ type: types.LOADING });
  axios
    .get(`https://weak-ruby-bull-wear.cyclic.app/order/`, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    })
    .then((res) => {
      dispatch({ type: types.GETORDERSDATA, payload: res.data.orderData });
      console.log(res.data.orderData);
    })
    .catch(() => dispatch({ type: types.ERROR }));
};

//
export const getProductsCount = (dispatch) => {
  dispatch({ type: types.LOADING });
  axios
    .get(`https://weak-ruby-bull-wear.cyclic.app/product_count/`, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    })
    .then((res) => {
      dispatch({ type: types.GETPRODUCTSCOUNT, payload: res.data });
      // console.log(res.data);
    })
    .catch(() => dispatch({ type: types.ERROR }));
};

export const DeleteOrdersData = (id) => (dispatch) => {
  dispatch({ type: types.LOADING });
  axios
    .delete(`https://weak-ruby-bull-wear.cyclic.app/cartProducts/${id}`, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    })
    .then((res) => {
      dispatch({ type: types.DELETEORDERSDATA, payload: res.data });
      // console.log(res.data)
    })
    .then(() => getOrdersData(dispatch))
    .catch(() => dispatch({ type: types.ERROR }));
};

// get admin product
export const getAdminProducts = (dispatch) => {
  dispatch({ type: types.LOADING });
  axios
    .get(`https://weak-ruby-bull-wear.cyclic.app/product/`, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    })
    .then((res) => {
      dispatch({ type: types.GETADMINPRODUCTS, payload: res.data });
      // console.log(res.data);
    })
    .catch((e) => dispatch({ type: types.ERROR }));
};
// Get admin products

// Add admin Data
export const AddAdminProducts = (details) => async (dispatch) => {
  dispatch({ type: types.LOADING });
  axios
    .post(`https://weak-ruby-bull-wear.cyclic.app/product/create`, details, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    })
    .then((res) => {
      dispatch({ type: types.ADDADMINPRODUCT, payload: res.data });
      // console.log(res.data);
    })
    .then(() => getAdminProducts(dispatch))
    .catch(() => dispatch({ type: types.ERROR }));
};
// Add admin Data

// Delete admin product
export const DeleteAdminProducts = (id) => async (dispatch) => {
  dispatch({ type: types.LOADING });
  axios
    .delete(`https://weak-ruby-bull-wear.cyclic.app/product/delete/${id}`, {
      headers: {
        Authorization: localStorage.getItem("admin_token"),
      },
    })
    .then((res) => {
      dispatch({ type: types.DELETEADMINPRODUCTS, payload: res.data });
      // console.log(res.data)
    })
    .then(() => getAdminProducts(dispatch))
    .catch(() => dispatch({ type: types.ERROR }));
};
// Delete admin product

// Edit admin product
export const editAdminProducts = (id, changes) => async (dispatch) => {
  console.log(changes);
  dispatch({ type: types.LOADING });
  axios
    .patch(
      `https://weak-ruby-bull-wear.cyclic.app/product/update/${id}`,
      changes,
      {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.EDITADMINPRODUCTS, payload: res.data });
    })
    .then(() => getAdminProducts(dispatch))
    .catch(() => dispatch({ type: types.ERROR }));
};

// Edit admin product

export const editAdminDetails = (id, changes) => async (dispatch) => {
  dispatch({ type: types.LOADING });
  axios
    .patch(
      `https://weak-ruby-bull-wear.cyclic.app/users/adminUpdate/${id}`,
      changes,
      {
        headers: {
          Authorization: localStorage.getItem("admin_token"),
        },
      }
    )
    .then((res) => {
      dispatch({ type: types.EDITADMINDETAILS, payload: res.data });
      toast.success("Admin profile updated successfully!", {
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    })
    .catch(() => {
      dispatch({ type: types.ERROR });
      toast.error("Something went wrong !", {
        icon: (
          <BiError
            style={{ color: "yellow", fontSize: "1.5rem", fontWeight: "800" }}
          />
        ),
        style: {
          borderRadius: "50px",
          background: "#989898",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    });
};
