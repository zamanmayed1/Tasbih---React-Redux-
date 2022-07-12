import { createSlice } from "@reduxjs/toolkit";

export const ThemeSlice = createSlice({
    name: "theme",
    initialState: {
        value: 'bg-orange-100'
    },
    reducers: {
        darkMode: (state) => {
            state.value = 'bg-gray-800'
        },
        whiteMode: (state) => {
            state.value = 'bg-blue-100'
        },

    }
})

export const { whiteMode, darkMode } = ThemeSlice.actions;
export default ThemeSlice.reducer;