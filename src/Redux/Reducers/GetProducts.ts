import { GET_PRODUCTS_SUCCESS } from "../Actions/ActionsTypes";


const initialState = {
    products:[]
}

export default function getProductsReducer (state = initialState, action: any){
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {...state, products: action.products};
        default:
            return state;
    };
}