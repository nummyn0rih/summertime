import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	farmers: {
		entities: {
			farmer122: {
				id: 'farmer122',
				name: 'Аксактемиров',
				region: 'Астрахань',
				contact: 'Мальщуков',
				crops: ['crop122', 'crop133'],
			},
			farmer133: {
				id: 'farmer133',
				name: 'Цой',
				region: 'Астрахань',
				contact: 'Мальщуков',
				crops: ['crop122', 'crop144'],
			},
			farmer144: {
				id: 'farmer144',
				name: 'Байрамов',
				region: 'Астрахань',
				contact: 'Мальщуков',
				crops: ['crop122', 'crop133'],
			},
			farmer155: {
				id: 'farmer155',
				name: 'Мищенко',
				region: 'Волгоград',
				contact: 'Румянцев',
				crops: ['crop122', 'crop144'],
			},
			farmer166: {
				id: 'farmer166',
				name: 'Мальсагов Х',
				region: 'Волгоград',
				contact: 'Румянцев',
				crops: ['crop122', 'crop144'],
			},
		},
		ids: ['farmer122', 'farmer133', 'farmer144', 'farmer155', 'farmer166'],
	},
};

export const farmersSlice = createSlice({
	name: 'farmers',
	initialState,
	reducers: {
		addOne: (state) => {},
		updateOne: (state) => {},
		deleteOne: (state) => {},
	},
});

export const { addOne, updateOne, deleteOne } = farmersSlice.actions;

export default farmersSlice.reducer;
