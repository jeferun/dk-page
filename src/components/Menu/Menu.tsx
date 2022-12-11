import { Grid } from '@mui/material';
import Box from '../Box';

interface Props {
	data: Data[];
}

function Menu({ data }: Props) {
	return (
		<Grid container item justifyContent='space-around' component='section'>
			{data.map((value, index) => (
				<Grid item lg='auto' key={value.text + index}>
					<Box
						label={value.text}
						icon={value.icon}
						size='large'
						handleClick={() => {}}
					/>
				</Grid>
			))}
		</Grid>
	);
}

export default Menu;
