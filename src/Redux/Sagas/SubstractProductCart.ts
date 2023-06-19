import { call, put, takeEvery } from "redux-saga/effects";
import ShoppingCartApi from "../../Mock/ShoppingCartApi";
import { REMOVE_PRODUCT_CART, REMOVE_PRODUCT_SUCCESS } from "../Actions/ActionsTypes";


function removeProductCart( id:number ) :any{
    return ShoppingCartApi.delete(id).then(response => response)
}

function* workRemoveProductCart ({payload:id}:any):any{
    const cartProducts = yield call(removeProductCart,id);
    yield put({type: REMOVE_PRODUCT_SUCCESS , cartProducts });
}

export default function* removeProduct(){
    yield takeEvery(REMOVE_PRODUCT_CART, workRemoveProductCart);

}