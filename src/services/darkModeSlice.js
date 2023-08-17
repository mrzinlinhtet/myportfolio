import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  isDarkMode: false, // Add a property to track the dark mode state
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      // Toggle the isDarkMode property between true and false
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
