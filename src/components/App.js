import React from 'react';
import { CssBaseline, Container } from '@mui/material';

import SearchAppBar from './SearchAppBar';

export default () => {
	return (
		<React.Fragment>
			<CssBaseline />
			<Container maxWidth='lg'>
				<SearchAppBar />
			</Container>
		</React.Fragment>
	);
};
