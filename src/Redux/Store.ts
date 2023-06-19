import createSagaMiddleware from "@redux-saga/core";
import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import rootReducer from "./Reducers/Reducer";
import fetchProduct from "./Sagas/FetchProduct";
import fetchProducts from "./Sagas/FetchProducts";
import fetchCartProducts from "./Sagas/FetchCartProducts";
import sumProducCart from "./Sagas/SumProductCart";
import removeProduct from "./Sagas/SubstractProductCart";


const sagaMiddleware = createSagaMiddleware();

export const store = createStore(rootReducer ,applyMiddleware(sagaMiddleware));

sagaMiddleware.run(fetchProduct);
sagaMiddleware.run(fetchProducts);
sagaMiddleware.run(fetchCartProducts);
sagaMiddleware.run(sumProducCart);
sagaMiddleware.run(removeProduct);
