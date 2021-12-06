import { configureStore } from '@reduxjs/toolkit';
import farmersReducer from '../slices/farmersSlice.js';
import cropsReducer from '../slices/cropsSlice.js';

export default configureStore({
	reducer: {
		farmers: farmersReducer,
		crops: cropsReducer,
	},
});
