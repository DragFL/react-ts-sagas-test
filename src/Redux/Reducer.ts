import {GET_PRODUCTS_SUCCESS, GET_PRODUCT_SUCCESS} from "./Actions";

const initialState = {
        selectedProduct:{},
        products:[]
    }

const reducer = (state = initialState, action: any) =>{
    switch(action.type){
        case GET_PRODUCTS_SUCCESS:
            return {...state, products: action.products};
        case GET_PRODUCT_SUCCESS:
            console.log("Llegamos al reducer: ", action.product);
            return {...state, selectedProduct: action.product}    
        default:
            return state;
    };

}

export default reducer;