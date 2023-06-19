import { call, put, takeEvery } from "redux-saga/effects";
import { clearlyNotAxiosGetOne } from "../../Mock/FakeApi";
import {
  GET_PRODUCT_FETCH,
  GET_PRODUCT_SUCCESS,
} from "../Actions/ActionsTypes";

function productFetch(id: number): any {
  return clearlyNotAxiosGetOne(id).then((response) => response);
}

function* workProductFetch({ payload: id }: any): any {
  const product = yield call(productFetch, id);
  yield put({ type: GET_PRODUCT_SUCCESS, product });
}

export default function* fetchProduct() {
  yield takeEvery(GET_PRODUCT_FETCH, workProductFetch);
}
