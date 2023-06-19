import { combineReducers } from "@reduxjs/toolkit";

import getProductReducer from "./GetProduct";
import getProductsReducer from "./GetProducts";
import productCartReducer from "./ProductCart";
import routeReducer from "./Route";

export default combineReducers({
  getProductReducer,
  getProductsReducer,
  productCartReducer,
  routeReducer,
});
