import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  defaultCity: {
    name: 'Minsk',
    lat: 53.9024716,
    lon: 27.5618225
  },
  selectedCity: {
    name: null,
    lat: null,
    lon: null
  }
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setDefaultCity: (state, action) => {
      state.defaultCity = { ...action.payload };
    },
    setSelectedCity: (state, action) => {
      const { name, lat, lon } = action.payload;
      const isSameState = state.selectedCity.name === name;
      state.selectedCity = isSameState ? initialState.selectedCity : { name, lat, lon };
    }
  }
});

const getState = state => state;

const getLocationData = createSelector(getState, state => state?.locationData);
const getDefaultCity = createSelector(getLocationData, state => state?.defaultCity);
const getSelectedCity = createSelector(getLocationData, state => state?.selectedCity);

const getCityForWeather = createSelector(
  [getSelectedCity, getDefaultCity],
  (selectedCity, defaultCity) => {
    return selectedCity.name ? selectedCity : defaultCity;
  }
);

export { getDefaultCity, getSelectedCity, getCityForWeather };

export const { setDefaultCity, setSelectedCity } = locationSlice.actions;

export default locationSlice.reducer;
