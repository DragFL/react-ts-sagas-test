import { GET_PRODUCT_SUCCESS } from "../Actions/ActionsTypes";

const initialState = {
    selectedProduct:{},
}

export default function getProductReducer (state = initialState, action: any){
    switch(action.type){
        case GET_PRODUCT_SUCCESS:
            return {...state, selectedProduct: action.product};
        default:
            return state;
    };
}