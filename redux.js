import { createStore } from "redux";

//reducer
const cartReducer = (
  state = {
    cart: [],
  },
  action
) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    default:
      return state;
  }
};

//store
const store = createStore(cartReducer);


//subscribe
store.subscribe(() => {
  console.log("STORE CHANGE : ", store.getState());
});

//dispatch
const action1 = { type: "ADD_TO_CART", payload: { id: 2, qty: 20 } };
store.dispatch(action1);

const action2 = { type: "ADD_TO_CART", payload: { id: 3, qty: 5 } };
store.dispatch(action2);


const action3 = { type: "ADD_TO_CART", payload: { id: 4, qty: 2 } };
store.dispatch(action3);

console.log("Oncreate store: ", store.getState());