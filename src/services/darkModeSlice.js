import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie';

const initialState = {
  value: 0,
  isDarkMode: Cookies.get('isDarkMode') === 'true', // Read from the cookie
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      const newDarkModeState = !state.isDarkMode;
      state.isDarkMode = newDarkModeState;
      Cookies.set('isDarkMode', newDarkModeState); // Save to the cookie
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
