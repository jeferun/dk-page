import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AvatarStyle, Props } from './styles';

function Box(props: Props) {
	const isClick = Boolean(props.handleclick);

	return (
		<Grid
			container
			justifyContent='center'
			alignItems='center'
			direction='column'
		>
			{isClick ? (
				<IconButton component='button' onClick={props.handleclick}>
					<AvatarStyle {...props}>{props.icon}</AvatarStyle>
				</IconButton>
			) : (
				<AvatarStyle {...props}>{props.icon}</AvatarStyle>
			)}

			{props.label ? <Typography mt={1}>{props.label}</Typography> : ''}
		</Grid>
	);
}

export default Box;
