import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '../../components/Button';
import List from '../../components/List';
import Menu from '../../components/Menu';
import MiniCard from '../../components/MiniCard';
import Pie from '../../components/PieChart';
import { PaperStyle } from '../../styles';
import { customersAtRisk, dataInfo, menuConfig, shortsCuts } from './utils';

function Home() {
	return (
		<Grid container alignItems='flex-start' spacing={2} mt={4}>
			<Menu data={menuConfig} />
			<Grid item sm={12} lg={12}>
				<Typography variant='h5' fontWeight='fontWeightBold' whiteSpace='nowrap'>
					Conocimiento de Cliente
				</Typography>
			</Grid>
			<Grid
				container
				item
				xs={12}
				sm={7}
				lg={8}
				justifyContent='space-between'
				component='section'
			>
				{dataInfo.map((value, index) => (
					<Grid item xs={5} lg='auto' key={value.title + index} m={1}>
						<MiniCard title={value.title} description={value.description} />
					</Grid>
				))}
				<Grid
					container
					item
					xs={12}
					component='section'
					justifyContent='space-between'
					mt={6}
				>
					<Grid item xs={12} lg='auto'>
						<PaperStyle>
							<Typography
								variant='body1'
								fontWeight='fontWeightBold'
								mb={3}
								mt={2}
							>
								Composición de tus clientes
							</Typography>
							<Grid item pr={6} pl={5}>
								<Pie />
							</Grid>
						</PaperStyle>
					</Grid>
					<Grid item xs={12} lg='auto' mt={1}>
						<PaperStyle>
							<List data={customersAtRisk} title='Clientes en Riesgo' />
							<Grid item mt={1}>
								<Button variant='contained'>
									<Grid pl={3}>Crear campaña ahora</Grid>
								</Button>
							</Grid>
						</PaperStyle>
					</Grid>
				</Grid>
			</Grid>
			<Grid container item xs={12} sm={5} lg={4} component='section' justifyContent='center'>
				<Grid item  xs={12} lg='auto'>
					<PaperStyle>
						<List data={shortsCuts} title='ShortsCuts' isIcon />
					</PaperStyle>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Home;
