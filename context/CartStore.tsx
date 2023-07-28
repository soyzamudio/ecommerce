"use client";

import { addToCart, getCart, removeItem, updateCartItem } from "@lib/cart";
import {
  Dispatch,
  ReactNode,
  ReducerWithoutAction,
  createContext,
  useReducer,
  useState,
} from "react";
import swell from "swell-js";

type StateType = {
  cart: swell.Cart | null;
};

type ActionType = {
  type: string;
  payload?: any;
};

const initialState: StateType = {
  cart: null,
};

const reducer = async (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const res = addToCart({
        productId: action.payload.productId,
        variantId: action.payload.variantId,
        quantity: action.payload.quantity,
      });

      const cart = await res;

      return { ...state, cart: cart };
    }
    case "UPDATE_ITEM": {
      const res = await updateCartItem({
        variantId: action.payload.variantId,
        quantity: action.payload.quantity,
      });

      const cart = await res;

      return { ...state, cart: cart };
    }
    case "REMOVE_ITEM": {
      const res = await removeItem(action.payload.variantId);
      const cart = await res;

      return { ...state, cart: cart };
    }
    case "LOAD_CART": {
      const cart = await getCart();
      return { ...state, cart: cart };
    }
    case "APPLY_DISCOUNT": {
      const res = await swell.cart.applyCoupon(action.payload.discountCode);
      const cart = await res;

      return { ...state, cart: cart };
    }
    default: {
      return state;
    }
  }
};

export const CartStore = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

function useAsyncReducer(reducer: any, initState: any) {
  const [state, setState] = useState(initState),
    dispatchState = async (action: any) =>
      setState(await reducer(state, action));
  return [state, dispatchState];
}

export const CartStoreContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, dispatch] = useAsyncReducer(reducer, initialState);

  return (
    <CartStore.Provider value={{ state, dispatch }}>
      {children}
    </CartStore.Provider>
  );
};
