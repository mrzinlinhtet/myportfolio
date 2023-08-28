import { configureStore } from '@reduxjs/toolkit';
import darkModeSlice from './darkModeSlice';
import Cookies from 'js-cookie';

// Check if the stored value is 'true' or 'false'
const isDarkModeFromCookie = Cookies.get('isDarkMode') === 'true';

const initialState = {
  darkMode: { isDarkMode: isDarkModeFromCookie },
};

export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice,
  },
  preloadedState: initialState, // Provide the initial state
});
