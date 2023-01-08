import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: 0,
  searchValue: '',
  currentPage: 1,
  sort: {
    name: 'попопулярности',
    sortProperty: 'rating',
  },
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId(state, action) {
      state.categoryId = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setChangeSort(state, action) {
      state.sort = action.payload;
    },
    setFilters(state, action) {
      state.sort = action.payload.sort;
      state.categoryId = Number(action.payload.categoryId);
      state.currentPage = Number(action.payload.currentPage);
    },
  },
});

export const selectSort = (state) => state.filterSlice.sort;

export const { setCategoryId, setChangeSort, setFilters, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
