import { createSlice } from '@reduxjs/toolkit';

const parsed = JSON.parse(localStorage.getItem('contactlist'));

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: [...parsed],
  reducers: {
    addC: {
      reducer: (state, { payload }) => {
        return [...state, payload];
      },
    },
    deleteC: (state, { payload }) => {
      return state.filter(elem => elem.id !== payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { addC, deleteC } = contactsSlice.actions;

export default contactsSlice.reducer;
