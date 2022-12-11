import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import NavigateNext from '@mui/icons-material/NavigateNext';
import { Divider } from '@mui/material';
import Box from '../Box';
import { ListStyle, ListItemTextStyle } from './styles';

interface Props {
	data: Data[];
	title: string;
	isIcon?: boolean;
}

function InteractiveList({ data, title, isIcon }: Props) {
	return (
		<Grid p='8px 12px'>
			<Typography variant='body1' fontWeight='fontWeightBold' mb={2}>
				{title}
			</Typography>
			<ListStyle dense>
				{data.map((value, index) => (
					<div key={value.text + index}>
						{index ? <Divider /> : ''}
						<ListItem
							secondaryAction={
								<IconButton edge='end' aria-label='delete'>
									<NavigateNext />
								</IconButton>
							}
						>
							{isIcon ? (
								<ListItemAvatar>
									<Grid mr={2}>
										<Box icon={value.icon} />
									</Grid>
								</ListItemAvatar>
							) : (
								<></>
							)}
							<ListItemTextStyle primary={value.text} />
						</ListItem>
					</div>
				))}
			</ListStyle>
		</Grid>
	);
}

export default InteractiveList;
