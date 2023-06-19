import { call, put, takeEvery } from "redux-saga/effects";
import CartProduct from "../../Interfaces/cartProduct.interface";
import ShoppingCartApi from "../../Mock/ShoppingCartApi";
import { getProductsCart } from "../Actions/Actions";
import { ADD_PRODUCT_CART, ADD_PRODUCT_SUCCESS} from "../Actions/ActionsTypes";


function addProductCart( item:CartProduct ) :any{
    return ShoppingCartApi.add(item).then(response => response)
}

function* workAddProductCart ({payload:item}:any):any{
    const cartProducts = yield call(addProductCart,item);
    yield put({type: ADD_PRODUCT_SUCCESS , cartProducts });
    yield call(getProductsCart);
}

export default function* addProduct(){
    yield takeEvery(ADD_PRODUCT_CART, workAddProductCart);

}