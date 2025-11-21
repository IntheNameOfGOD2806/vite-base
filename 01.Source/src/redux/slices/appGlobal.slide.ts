import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  listSystemKey: [],
  staticNavbar: [],
  listCount: {},
  listTabs: [],
  isAuthenticated: false,
  lang: 'vi',
};

export const appGlobalSlice = createSlice({
  name: 'appGlobal',
  initialState,
  reducers: {
    getListSystemKey: (state, action) => {
      state.listSystemKey = action.payload;
    },
    getStaticNav: (state, action) => {
      state.staticNavbar = action.payload;
    },
    setListTabs: (state, action) => {
      state.listTabs = action.payload;
    },
    changeAuthorization: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setListCount: (state, action) => {
      state.listCount = action.payload;
    },
    setLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const {
  getListSystemKey,
  changeAuthorization,
  setListTabs,
  getStaticNav,
  setListCount,
  setLang,
} = appGlobalSlice.actions;

export default appGlobalSlice.reducer;
