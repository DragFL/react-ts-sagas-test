import CartProduct from "../../Interfaces/cartProduct.interface";
import {
  ADD_PRODUCT_CART,
  GET_CART_PRODUCTS,
  GET_PRODUCTS_FETCH,
  GET_PRODUCT_FETCH,
  REMOVE_PRODUCT_CART,
  SET_ROUTE,
} from "./ActionsTypes";

export const getProductsFetch = () => ({
  type: GET_PRODUCTS_FETCH,
});

export const getProductFetch = (id: number) => ({
  type: GET_PRODUCT_FETCH,
  payload: id,
});

export const getProductsCart = () => ({
  type: GET_CART_PRODUCTS,
});

export const addProductCart = (item: CartProduct) => ({
  type: ADD_PRODUCT_CART,
  payload: item,
});

export const removeProductCart = (id: number) => ({
  type: REMOVE_PRODUCT_CART,
  payload: id,
});

export const setRoute = (route: string) => ({
  type: SET_ROUTE,
  payload: route,
});
