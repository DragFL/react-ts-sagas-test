import {clearlyNotAxiosGet, clearlyNotAxiosGetOne} from '../Mock/FakeApi';
import {call,put,takeEvery} from 'redux-saga/effects';
import {GET_PRODUCTS_FETCH, GET_PRODUCTS_SUCCESS, GET_PRODUCT_FETCH,GET_PRODUCT_SUCCESS  } from './Actions';

function productsFetch () {
    return clearlyNotAxiosGet().then(response => response);
}

function* workProductsFetch ():any {
    const products = yield call(productsFetch);
    yield put({type: GET_PRODUCTS_SUCCESS, products });
}


function productFetch( id:number ) :any{
    return clearlyNotAxiosGetOne(id).then(response => response)
}

function* workProductFetch ({payload:id}:any):any{
    console.log("En el saga: ", id);
    const product = yield call(productFetch,id);
    yield put({type: GET_PRODUCT_SUCCESS , product });
}

function* mySaga(){
    yield takeEvery(GET_PRODUCTS_FETCH, workProductsFetch);
    yield takeEvery(GET_PRODUCT_FETCH, workProductFetch);
}

export default mySaga;           