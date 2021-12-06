import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

export default (props) => {
	const { rows, columns } = props;

	return (
		<div style={{ width: '100%' }}>
			<DataGrid
				rows={rows}
				columns={columns}
				autoHeight
				hideFooterPagination
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};
