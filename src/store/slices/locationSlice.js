import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  latitude: null,
  longitude: null,
  townName: null
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    setLocation: (state, action) => {
      const { longitude, latitude } = action.payload;
      state.latitude = latitude;
      state.longitude = longitude;
    },
    setTown: (state, action) => {
      const { townName } = action.payload;
      state.townName = townName;
    }
  }
});

export const { setLocation, setTown } = locationSlice.actions;

export default locationSlice.reducer;
