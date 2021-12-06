import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	crops: {
		entities: {
			crop122: {
				id: 'crop122',
				name: 'Черри',
				farmers: [
					{
						farmerId: 'farmer122',
						price: 30,
						fieldArea: 18,
						value: 550000, // сделать вычисляемым
						values: {
							firstHalfOfJune: null,
							secondHalfOfJune: null,
							firstHalfOfJuly: null,
							secondHalfOfJuly: 150000,
							firstHalfOfAugust: 125000,
							secondHalfOfAugust: 125000,
							firstHalfOfSeptember: 100000,
							secondHalfOfSeptember: 50000,
						},
						performance: 0,
					},
					{
						farmerId: 'farmer133',
						price: 30,
						fieldArea: 16,
						value: 450000, // сделать вычисляемым
						values: {
							firstHalfOfJune: null,
							secondHalfOfJune: null,
							firstHalfOfJuly: null,
							secondHalfOfJuly: 100000,
							firstHalfOfAugust: 125000,
							secondHalfOfAugust: 125000,
							firstHalfOfSeptember: 75000,
							secondHalfOfSeptember: 25000,
						},
						performance: 0,
					},
					{
						farmerId: 'farmer144',
						price: 30,
						fieldArea: 2.5,
						value: 75000, // сделать вычисляемым
						values: {
							firstHalfOfJune: null,
							secondHalfOfJune: null,
							firstHalfOfJuly: null,
							secondHalfOfJuly: null,
							firstHalfOfAugust: 25000,
							secondHalfOfAugust: 25000,
							firstHalfOfSeptember: 20000,
							secondHalfOfSeptember: null,
						},
						performance: 0,
					},
					{
						farmerId: 'farmer155',
						price: 30,
						fieldArea: 8,
						value: 200000, // сделать вычисляемым
						values: {
							firstHalfOfJune: null,
							secondHalfOfJune: null,
							firstHalfOfJuly: null,
							secondHalfOfJuly: null,
							firstHalfOfAugust: 50000,
							secondHalfOfAugust: 50000,
							firstHalfOfSeptember: 50000,
							secondHalfOfSeptember: 50000,
						},
						performance: 0,
					},
				],
			},
			crop133: {
				id: 'crop133',
				name: 'Огурцы',
				farmers: [
					{
						farmerId: 'farmer122',
						price: 30,
						fieldArea: 3,
						value: 150000, // сделать вычисляемым
						values: {
							firstHalfOfJune: null,
							secondHalfOfJune: 30000,
							firstHalfOfJuly: 50000,
							secondHalfOfJuly: 46000,
							firstHalfOfAugust: 24000,
							secondHalfOfAugust: null,
							firstHalfOfSeptember: null,
							secondHalfOfSeptember: null,
						},
						performance: 0,
					},
					{
						farmerId: 'farmer144',
						price: 30,
						fieldArea: 5,
						value: 150000, // сделать вычисляемым
						values: {
							firstHalfOfJune: null,
							secondHalfOfJune: 30000,
							firstHalfOfJuly: 48000,
							secondHalfOfJuly: 48000,
							firstHalfOfAugust: 24000,
							secondHalfOfAugust: null,
							firstHalfOfSeptember: null,
							secondHalfOfSeptember: null,
						},
						performance: 0,
					},
					{
						farmerId: 'farmer155',
						price: 30,
						fieldArea: 4,
						value: 100000, // сделать вычисляемым
						values: {
							firstHalfOfJune: null,
							secondHalfOfJune: null,
							firstHalfOfJuly: 25000,
							secondHalfOfJuly: 35000,
							firstHalfOfAugust: 20000,
							secondHalfOfAugust: 20000,
							firstHalfOfSeptember: null,
							secondHalfOfSeptember: null,
						},
						performance: 0,
					},
				],
			},
			crop144: {
				id: 'crop144',
				name: 'Патиссоны',
				farmers: [],
			},
		},
		ids: ['crop122', 'crop133', 'crop144'],
	},
};

export const cropsSlice = createSlice({
	name: 'crops',
	initialState,
	reducers: {
		addOne: (state) => {},
		updateOne: (state) => {},
		deleteOne: (state) => {},
	},
});

export const { addOne, updateOne, deleteOne } = cropsSlice.actions;

export default cropsSlice.reducer;
