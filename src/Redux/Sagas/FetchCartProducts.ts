import { call, put, takeEvery } from "redux-saga/effects";
import ShoppingCartApi from "../../Mock/ShoppingCartApi";
import { GET_CART_PRODUCTS, GET_CART_SUCCESS } from "../Actions/ActionsTypes";

function cartProductsFetch() {
  return ShoppingCartApi.getAll().then((response) => response);
}

function* workCartProductsFetch(): any {
  const cartProducts = yield call(cartProductsFetch);
  yield put({ type: GET_CART_SUCCESS, cartProducts });
}

export default function* fetchProducts() {
  yield takeEvery(GET_CART_PRODUCTS, workCartProductsFetch);
}
