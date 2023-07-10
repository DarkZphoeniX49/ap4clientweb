/** @format */

import React from "react";
import {store} from "../../../../redux/store";
import { viderStore } from "../../../../redux/CartSlice";
import { useDispatch } from "react-redux";
export default function StoreGuard({ children }) {
  const dispatch = useDispatch();

  let storage = store.getState();
  console.log(storage);
  if (storage) {
    dispatch(viderStore());
    localStorage.clear();
    return <> {children} </>;
  } else {
    return <>{children}</>;
  }
}
