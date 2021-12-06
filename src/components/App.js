import React from 'react';
import { CssBaseline, Container } from '@mui/material';

import SearchAppBar from './SearchAppBar';
import TableByCrops from './TableByCrops';

export default () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<SearchAppBar />
				<TableByCrops />
			</Container>
		</React.Fragment>
	);
};
