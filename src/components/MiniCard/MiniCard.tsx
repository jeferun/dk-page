import { Typography } from '@mui/material';
import { PaperStyle } from '../../styles';

interface Props {
	title: string;
	description: string;
}

function MiniCard({ title, description }: Props) {
	return (
		<PaperStyle>
			<Typography variant='h4' fontWeight='fontWeightBold'>
				{title}
			</Typography>
			<Typography>{description}</Typography>
		</PaperStyle>
	);
}

export default MiniCard;
