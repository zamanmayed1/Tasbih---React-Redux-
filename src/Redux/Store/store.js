import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../State/Counter/CounterSlice";
import ThemeSlice from "../State/Theme/ThemeSlice";


export default configureStore({

    reducer: {
        counter: CounterSlice,
        theme: ThemeSlice
    }
})