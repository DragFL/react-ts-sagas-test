import { call, put, takeEvery } from "redux-saga/effects";
import { clearlyNotAxiosGet } from "../../Mock/FakeApi";
import { GET_PRODUCTS_FETCH, GET_PRODUCTS_SUCCESS } from "../Actions/ActionsTypes";


function productsFetch () {
    return clearlyNotAxiosGet().then(response => response);
}

function* workProductsFetch ():any {
    const products = yield call(productsFetch);
    yield put({type: GET_PRODUCTS_SUCCESS, products });
}

export default function* fetchProducts(){
    yield takeEvery(GET_PRODUCTS_FETCH, workProductsFetch);

}