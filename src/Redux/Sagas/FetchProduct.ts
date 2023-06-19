import { call, put, takeEvery } from "redux-saga/effects";
import ProductsApi from "../../Server/ProductsApi";
import {
  GET_PRODUCT_FETCH,
  GET_PRODUCT_SUCCESS,
} from "../Actions/ActionsTypes";

function productFetch(id: number): any {
  return ProductsApi.getOne(id).then((response) => response);
}

function* workProductFetch({ payload: id }: any): any {
  const product = yield call(productFetch, id);
  yield put({ type: GET_PRODUCT_SUCCESS, product });
}

export default function* fetchProduct() {
  yield takeEvery(GET_PRODUCT_FETCH, workProductFetch);
}
