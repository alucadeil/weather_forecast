import { createSelector } from '@reduxjs/toolkit';

const getState = state => state;

const getLocationData = createSelector(getState, state => state?.locationData);
const getDefaultCity = createSelector(getLocationData, state => state?.defaultCity);
const getSelectedCity = createSelector(getLocationData, state => state?.selectedCity);

export { getDefaultCity, getSelectedCity };
