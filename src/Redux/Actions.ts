export const GET_PRODUCTS_FETCH = 'GET_PRODUCTS_FETCH';
export const GET_PRODUCTS_SUCCESS = 'GET_PRODUCTS_FETCH';

export const getProductsFetch = () => ({
    type: GET_PRODUCTS_FETCH 
});


export const GET_PRODUCT_FETCH = 'GET_PRODUCT_FETCH';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';

export const getProductFetch = (id:number) => ({
    type: GET_PRODUCT_FETCH,
    payload: id 
});


export const ADD_PRODUCT_CART = 'ADD_PRODUCT_CART';
export const REMOVE_PRODUCT_CART = 'REMOVE_PRODUCT_CART';

export const addProductCart = () => ({
    type: ADD_PRODUCT_CART
});

