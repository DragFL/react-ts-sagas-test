import {
  ADD_PRODUCT_SUCCESS,
  GET_CART_SUCCESS,
  REMOVE_PRODUCT_SUCCESS,
} from "../Actions/ActionsTypes";

const initialState = {
  cartProducts: [],
};

export default function productCartReducer(state = initialState, action: any) {
  switch (action.type) {
    case GET_CART_SUCCESS:
      return { ...state, cartProducts: [...action.cartProducts] };
    case ADD_PRODUCT_SUCCESS:
      return { ...state, cartProducts: [...action.cartProducts] };
    case REMOVE_PRODUCT_SUCCESS:
      return { ...state, cartProducts: [...action.cartProducts] };
    default:
      return state;
  }
}
