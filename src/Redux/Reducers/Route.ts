import { SET_ROUTE } from "../Actions/ActionsTypes";

const initialState = {
  route: "",
};

export default function routeReducer(state = initialState, action: any) {
  switch (action.type) {
    case SET_ROUTE:
      return { ...state, route: action.payload };
    default:
      return state;
  }
}
