import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  defaultCity: 'Minsk',
  selectedCity: null
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setDefaultCity: (state, action) => {
      state.defaultCity = action.payload;
    },
    setSelectedCity: (state, action) => {
      const { city } = action.payload;
      state.selectedCity = city;
    }
  }
});

export const { setDefaultCity, setSelectedCity } = locationSlice.actions;

export default locationSlice.reducer;
