import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import ExpandMore from '@mui/icons-material/ExpandMore';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Button from '../Button';
import Logo from './logo.png';

function NavBar() {
	return (
		<Grid
			container
			padding='14px 30px'
			bgcolor='white'
			justifyContent='space-between'
			alignItems='center'
		>
			<Grid item container lg={8} justifyContent='space-between'>
				<img src={Logo} alt='logo' height={42} />
				<Grid item>
					<IconButton color='inherit' component='label'>
						<ShoppingCartOutlinedIcon />
					</IconButton>
					<IconButton color='inherit' component='label'>
						<NotificationsNoneOutlinedIcon />
					</IconButton>
				</Grid>
			</Grid>
			<Grid
				item
				container
				lg={4}
				alignItems='center'
				justifyContent='space-evenly'
			>
				<Divider orientation='vertical' variant='middle' flexItem />
				<Avatar>JL</Avatar>
				<Typography> James Logan</Typography>
				<IconButton color='inherit' component='label'>
					<ExpandMore />
				</IconButton>
				<Divider orientation='vertical' variant='middle' flexItem />
				<Grid item>
					<Button variant='contained'>Acciones Rápidas</Button>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default NavBar;
