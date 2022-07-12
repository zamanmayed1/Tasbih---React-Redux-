import { createSlice } from "@reduxjs/toolkit";

export const CounterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers: {
        plusOne: (state) => {
            state.value = state.value + 1
        },
        minusOne: (state) => {
            state.value = state.value - 1
        },
        resetAll: (state) => {
            state.value = 0
        }

    }
})

export const { plusOne, minusOne, resetAll } = CounterSlice.actions;
export default CounterSlice.reducer;