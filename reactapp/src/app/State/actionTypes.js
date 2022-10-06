//This file contains the name of action types that we will use in reducers 

//User Action Types
export const addUserToStore = "User.AddToStore"; //we'll use in UserActions and UserReducer files

//Product Action Types
export const ADD_PRODUCTS_TOSTORE = "PRODUCT.ADD_PRODUCTS_TOSTORE";
export const FETCH_PRODUCTS_FULFILLED = "PRODUCT.FETCH_PRODUCTS_FULFILLED";
export const FETCH_PRODUCTS_REJECTED = "PRODUCT.FETCH_PRODUCTS_REJECTED";

//For Cart //action types for cart operations
export const ADD_ITEM = "CART.ADD_ITEM";
export const REMOVE_ITEM = "CART.REMOVE_ITEM";
export const UPDATE_ITEM = "CART.UPDATE_ITEM";
export const EMPTY_CART = "CART.EMPTY_CART";

//showLoading
export const SHOW_LOADING = "SHOW.LOADING";

//coupon
export const ADD_COUPON = "COUPON.ADDCOUPON";