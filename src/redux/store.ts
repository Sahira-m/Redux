import {configureStore} from "@reduxjs/toolkit";
import { type } from "os";
import productReducer from "./slice/product";

const store=configureStore({
    reducer:{product:productReducer},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck:false,
    }),
});
    export type RootState=ReturnType<typeof store.getState>;
        export default store;
        // type Appdispatch from redux toolkit
        export type AppDispatch=typeof store.dispatch;