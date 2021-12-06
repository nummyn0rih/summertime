import React from 'react';
import { useSelector } from 'react-redux';

import DataGrid from './DataGrid';
import Accordion from './Accordion';

const columns = [
	{ field: 'farmerId', headerName: 'ID', width: 90 },
	{
		field: 'region',
		headerName: 'Регион',
		width: 150,
	},
	{
		field: 'name',
		headerName: 'Фермер',
		width: 150,
	},
	{
		field: 'fieldArea',
		headerName: 'Площадь, га',
		type: 'number',
		width: 110,
		editable: true,
	},
	{
		field: 'price',
		headerName: 'Цена, руб/кг',
		type: 'number',
		width: 110,
		editable: true,
	},
	{
		field: 'value',
		headerName: 'Объем, кг',
		type: 'number',
		width: 110,
		editable: true,
	},
	// {
	// 	field: 'fullName',
	// 	headerName: 'Full name',
	// 	description: 'This column has a value getter and is not sortable.',
	// 	sortable: false,
	// 	width: 160,
	// 	valueGetter: (params) =>
	// 		`${params.getValue(params.id, 'firstName') || ''} ${
	// 			params.getValue(params.id, 'lastName') || ''
	// 		}`,
	// },
];

export default () => {
	const { farmers } = useSelector((state) => state.farmers);
	const { crops } = useSelector((state) => state.crops);

	const data = crops.ids.map((crop) => {
		const updatedFarmers = crops.entities[crop].farmers.map((farmer) => {
			const farmerId = farmer['farmerId'];
			const farmerInfo = farmers.entities[farmerId];
			return Object.assign({}, farmer, farmerInfo);
		});
		const grid = <DataGrid rows={updatedFarmers} columns={columns} />;
		const { id, name } = crops.entities[crop];

		return { id, name, grid };
	});

	return <Accordion data={data} />;
};
