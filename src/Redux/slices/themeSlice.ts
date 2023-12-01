// themeSlice.js
import { createSlice } from '@reduxjs/toolkit';

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: false,
  },
  reducers: {
    changeTheme: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { changeTheme } = themeSlice.actions;
export const selectTheme = (state:{theme:{mode:boolean}}) => state.theme.mode;

export default themeSlice.reducer;
