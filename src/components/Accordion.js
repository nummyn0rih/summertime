import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default ({ data }) => {
	return (
		<div>
			{data.map((item) => (
				<Accordion key={item.id}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={`panel${item.id}-content`}
						id={`panel${item.id}-header`}
					>
						<Typography>{item.name}</Typography>
					</AccordionSummary>
					<AccordionDetails>{item.grid}</AccordionDetails>
				</Accordion>
			))}
		</div>
	);
};
