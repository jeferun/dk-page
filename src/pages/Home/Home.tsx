import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '../../components/Button';
import List from '../../components/List';
import Menu from '../../components/Menu';
import MiniCard from '../../components/MiniCard';
import Pie from '../../components/PieChart';
import { PaperStyle } from '../../styles';

// p*
const menuConfig = [
	{
		text: 'Pronóstico',
		icon: (
			<svg
				width='32'
				height='32'
				viewBox='0 0 22 22'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M2.75 2.75V17.4167C2.75 17.9029 2.94315 18.3692 3.28697 18.713C3.63079 19.0568 4.0971 19.25 4.58333 19.25H19.25'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M6.41666 12.8333L10.0833 9.16668L13.75 12.8333L19.25 7.33334'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M16.5 7.33334H19.25V10.0833'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		text: 'Conocimiento',
		icon: (
			<svg
				width='32'
				height='32'
				viewBox='0 0 23 23'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M16.7183 19.0123L16.105 14.1018C16.0181 13.4062 15.6801 12.7664 15.1545 12.3026C14.6289 11.8388 13.952 11.583 13.2511 11.5833H11.1389C10.4383 11.5834 9.76187 11.8395 9.23671 12.3032C8.71155 12.767 8.3738 13.4065 8.28692 14.1018L7.67263 19.0123C7.63892 19.282 7.66298 19.5559 7.74324 19.8157C7.82349 20.0754 7.95809 20.3152 8.1381 20.5189C8.31811 20.7227 8.5394 20.8858 8.7873 20.9975C9.03519 21.1091 9.304 21.1668 9.57588 21.1666H14.816C15.0878 21.1666 15.3566 21.1089 15.6043 20.9972C15.8521 20.8854 16.0733 20.7223 16.2532 20.5186C16.4331 20.3148 16.5676 20.0751 16.6478 19.8154C16.728 19.5557 16.752 19.282 16.7183 19.0123V19.0123Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M12.1959 7.75C13.7837 7.75 15.0709 6.46282 15.0709 4.875C15.0709 3.28718 13.7837 2 12.1959 2C10.6081 2 9.32092 3.28718 9.32092 4.875C9.32092 6.46282 10.6081 7.75 12.1959 7.75Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M4.52922 10.6248C5.58776 10.6248 6.44588 9.76672 6.44588 8.70817C6.44588 7.64962 5.58776 6.7915 4.52922 6.7915C3.47067 6.7915 2.61255 7.64962 2.61255 8.70817C2.61255 9.76672 3.47067 10.6248 4.52922 10.6248Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M19.6126 10.9166C20.6711 10.9166 21.5293 10.0585 21.5293 8.99992C21.5293 7.94137 20.6711 7.08325 19.6126 7.08325C18.554 7.08325 17.6959 7.94137 17.6959 8.99992C17.6959 10.0585 18.554 10.9166 19.6126 10.9166Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M4.52928 13.5H4.23603C3.78232 13.4999 3.3433 13.6608 2.99707 13.9541C2.65085 14.2473 2.41987 14.6538 2.34524 15.1014L2.02611 17.018C1.98031 17.2926 1.99489 17.5739 2.06882 17.8423C2.14276 18.1107 2.27427 18.3598 2.45422 18.5722C2.63418 18.7847 2.85824 18.9553 3.11084 19.0724C3.36344 19.1894 3.6385 19.25 3.9169 19.25H7.40428'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M19.5709 13.0833H19.8642C20.3179 13.0832 20.7569 13.2441 21.1031 13.5373C21.4494 13.8306 21.6803 14.2371 21.755 14.6846L22.0741 16.6013C22.1199 16.8759 22.1053 17.1572 22.0314 17.4256C21.9574 17.694 21.8259 17.9431 21.646 18.1555C21.466 18.3679 21.242 18.5386 20.9894 18.6556C20.7368 18.7727 20.4617 18.8333 20.1833 18.8333H16.6959'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		text: 'Suscripciones',
		icon: (
			<svg
				width='38'
				height='38'
				viewBox='0 0 27 27'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M5.625 7.875H21.1388C21.4531 7.87501 21.764 7.94089 22.0513 8.06839C22.3386 8.1959 22.596 8.38219 22.807 8.61527C23.0179 8.84834 23.1776 9.12303 23.2759 9.42162C23.3742 9.72022 23.4088 10.0361 23.3775 10.3489L22.7025 17.0989C22.647 17.6541 22.3872 18.1688 21.9735 18.5432C21.5598 18.9176 21.0217 19.125 20.4638 19.125H9.72C9.19966 19.1252 8.69533 18.9451 8.29288 18.6152C7.89043 18.2854 7.61474 17.8263 7.51275 17.316L5.625 7.875Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M5.625 7.875L4.71375 4.22663C4.65281 3.98335 4.51232 3.76741 4.31461 3.61311C4.1169 3.45881 3.87329 3.37501 3.6225 3.375H2.25'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M9 23.625H11.25'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M18 23.625H20.25'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		text: 'Mi empresa',
		icon: (
			<svg
				width='42'
				height='42'
				viewBox='0 0 30 30'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M23.75 8.75H6.25C4.86929 8.75 3.75 9.86929 3.75 11.25V21.25C3.75 22.6307 4.86929 23.75 6.25 23.75H23.75C25.1307 23.75 26.25 22.6307 26.25 21.25V11.25C26.25 9.86929 25.1307 8.75 23.75 8.75Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M11.25 7.5C11.25 6.83696 11.5134 6.20107 11.9822 5.73223C12.4511 5.26339 13.087 5 13.75 5H16.25C16.913 5 17.5489 5.26339 18.0178 5.73223C18.4866 6.20107 18.75 6.83696 18.75 7.5V8.75H11.25V7.5Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M12.5 15L12.7638 15.1325C13.4581 15.4797 14.2237 15.6605 15 15.6605C15.7763 15.6605 16.5419 15.4797 17.2362 15.1325L17.5 15'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		text: 'Mis datos',
		icon: (
			<svg
				width='32'
				height='32'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M9 3H4C3.44772 3 3 3.44772 3 4V9C3 9.55228 3.44772 10 4 10H9C9.55228 10 10 9.55228 10 9V4C10 3.44772 9.55228 3 9 3Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M9 14H4C3.44772 14 3 14.4477 3 15V20C3 20.5523 3.44772 21 4 21H9C9.55228 21 10 20.5523 10 20V15C10 14.4477 9.55228 14 9 14Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M20 3H15C14.4477 3 14 3.44772 14 4V9C14 9.55228 14.4477 10 15 10H20C20.5523 10 21 9.55228 21 9V4C21 3.44772 20.5523 3 20 3Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M20 14H15C14.4477 14 14 14.4477 14 15V20C14 20.5523 14.4477 21 15 21H20C20.5523 21 21 20.5523 21 20V15C21 14.4477 20.5523 14 20 14Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		text: 'Configurar',
		icon: (
			<svg
				width='54'
				height='54'
				viewBox='0 0 36 36'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<g clip-path='url(#clip0_6_93)'>
					<path
						d='M20.4 7.5228C20.4 6.6816 19.7184 6 18.8772 6H17.124C16.2816 6 15.6 6.6816 15.6 7.5228C15.6 8.2164 15.1248 8.8116 14.478 9.066C14.376 9.1068 14.274 9.15 14.1744 9.1932C13.5372 9.4692 12.78 9.3852 12.288 8.8944C12.0025 8.60905 11.6153 8.44876 11.2116 8.44876C10.8079 8.44876 10.4207 8.60905 10.1352 8.8944L8.8944 10.1352C8.60905 10.4207 8.44876 10.8079 8.44876 11.2116C8.44876 11.6153 8.60905 12.0025 8.8944 12.288V12.288C9.3864 12.78 9.4704 13.536 9.192 14.1744C9.14826 14.2749 9.10625 14.3761 9.066 14.478C8.8116 15.1248 8.2164 15.6 7.5228 15.6C6.6816 15.6 6 16.2816 6 17.1228V18.8772C6 19.7184 6.6816 20.4 7.5228 20.4C8.2164 20.4 8.8116 20.8752 9.066 21.522C9.1068 21.624 9.15 21.726 9.192 21.8256C9.4692 22.4628 9.3852 23.22 8.8944 23.712C8.60905 23.9976 8.44876 24.3847 8.44876 24.7884C8.44876 25.1921 8.60905 25.5793 8.8944 25.8648L10.1352 27.1056C10.4207 27.3909 10.8079 27.5512 11.2116 27.5512C11.6153 27.5512 12.0025 27.3909 12.288 27.1056C12.78 26.6136 13.536 26.5296 14.1744 26.8068C14.274 26.8512 14.376 26.8932 14.478 26.934C15.1248 27.1884 15.6 27.7836 15.6 28.4772C15.6 29.3184 16.2816 30 17.1228 30H18.8772C19.7184 30 20.4 29.3184 20.4 28.4772C20.4 27.7836 20.8752 27.1884 21.522 26.9328C21.624 26.8932 21.726 26.8512 21.8256 26.808C22.4628 26.5296 23.22 26.6148 23.7108 27.1056C23.8522 27.2471 24.0201 27.3593 24.2049 27.4359C24.3897 27.5124 24.5878 27.5518 24.7878 27.5518C24.9878 27.5518 25.1859 27.5124 25.3707 27.4359C25.5555 27.3593 25.7234 27.2471 25.8648 27.1056L27.1056 25.8648C27.3909 25.5793 27.5512 25.1921 27.5512 24.7884C27.5512 24.3847 27.3909 23.9976 27.1056 23.712V23.712C26.6136 23.22 26.5296 22.464 26.8068 21.8256C26.8512 21.726 26.8932 21.624 26.934 21.522C27.1884 20.8752 27.7836 20.4 28.4772 20.4C29.3184 20.4 30 19.7184 30 18.8772V17.124C30 16.2828 29.3184 15.6012 28.4772 15.6012C27.7836 15.6012 27.1884 15.126 26.9328 14.4792C26.8926 14.3773 26.8506 14.2761 26.8068 14.1756C26.5308 13.5384 26.6148 12.7812 27.1056 12.2892C27.3909 12.0037 27.5512 11.6165 27.5512 11.2128C27.5512 10.8091 27.3909 10.4219 27.1056 10.1364L25.8648 8.8956C25.5793 8.61025 25.1921 8.44996 24.7884 8.44996C24.3847 8.44996 23.9976 8.61025 23.712 8.8956V8.8956C23.22 9.3876 22.464 9.4716 21.8256 9.1944C21.7251 9.15025 21.6239 9.10784 21.522 9.0672C20.8752 8.8116 20.4 8.2164 20.4 7.524V7.5228Z'
						stroke='black'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M23 18C23 19.3261 22.4732 20.5979 21.5355 21.5355C20.5979 22.4732 19.3261 23 18 23C16.6739 23 15.4021 22.4732 14.4645 21.5355C13.5268 20.5979 13 19.3261 13 18C13 16.6739 13.5268 15.4021 14.4645 14.4645C15.4021 13.5268 16.6739 13 18 13C19.3261 13 20.5979 13.5268 21.5355 14.4645C22.4732 15.4021 23 16.6739 23 18Z'
						stroke='black'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</g>
				<defs>
					<clipPath id='clip0_6_93'>
						<rect width='36' height='36' fill='white' />
					</clipPath>
				</defs>
			</svg>
		),
	},
];

// p*
const dataInfo = [
	{ title: '80%', description: 'Clientes' },
	{ title: '10K', description: 'Ordenes' },
	{ title: '200M', description: 'Monto Compras' },
	{ title: '5d', description: 'Monto prom.' },
];

const shortsCuts = [
	{
		text: 'Nueva campaña',
		icon: (
			<svg
				width='15'
				height='14'
				viewBox='0 0 11 10'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M10 8.11111V3.66667C10 3.43092 9.90518 3.20483 9.7364 3.03813C9.56761 2.87143 9.33869 2.77778 9.1 2.77778H6.0562C5.88903 2.77777 5.72516 2.73178 5.58297 2.64496C5.44078 2.55814 5.32588 2.43392 5.25115 2.28622L4.84885 1.49156C4.77409 1.34379 4.65912 1.21953 4.51684 1.1327C4.37456 1.04588 4.2106 0.999923 4.04335 1H1.9C1.66131 1 1.43239 1.09365 1.2636 1.26035C1.09482 1.42705 1 1.65314 1 1.88889V8.11111C1 8.34686 1.09482 8.57295 1.2636 8.73965C1.43239 8.90635 1.66131 9 1.9 9H9.1C9.33869 9 9.56761 8.90635 9.7364 8.73965C9.90518 8.57295 10 8.34686 10 8.11111Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M5.5 5V6M5.5 6V7M5.5 6H7M5.5 6H4'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		text: 'Editar Segmentos',
		icon: (
			<svg
				width='16'
				height='16'
				viewBox='0 0 12 12'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M8.237 2.704L9.296 3.7625M8.918 1.7715L6.0545 4.635C5.90654 4.78275 5.80564 4.97099 5.7645 5.176L5.5 6.5L6.824 6.235C7.029 6.194 7.217 6.0935 7.365 5.9455L10.2285 3.082C10.3145 2.99595 10.3828 2.8938 10.4294 2.78137C10.4759 2.66894 10.4999 2.54844 10.4999 2.42675C10.4999 2.30506 10.4759 2.18456 10.4294 2.07213C10.3828 1.9597 10.3145 1.85755 10.2285 1.7715C10.1425 1.68545 10.0403 1.61719 9.92787 1.57062C9.81544 1.52405 9.69494 1.50009 9.57325 1.50009C9.45156 1.50009 9.33106 1.52405 9.21863 1.57062C9.1062 1.61719 9.00405 1.68545 8.918 1.7715V1.7715Z'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
				<path
					d='M9.5 7.5V9C9.5 9.26522 9.39464 9.51957 9.20711 9.70711C9.01957 9.89464 8.76522 10 8.5 10H3C2.73478 10 2.48043 9.89464 2.29289 9.70711C2.10536 9.51957 2 9.26522 2 9V3.5C2 3.23478 2.10536 2.98043 2.29289 2.79289C2.48043 2.60536 2.73478 2.5 3 2.5H4.5'
					stroke='black'
					stroke-linecap='round'
					stroke-linejoin='round'
				/>
			</svg>
		),
	},
	{
		text: 'Ir a tablero',
		icon: (
			<svg
				width='24'
				height='24'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<circle cx='10' cy='10' r='10' fill='#F8F5FF' />
				<g clip-path='url(#clip0_0_1)'>
					<path
						d='M13.3333 6.25H6.66666C6.20642 6.25 5.83333 6.6231 5.83333 7.08333V12.9167C5.83333 13.3769 6.20642 13.75 6.66666 13.75H13.3333C13.7936 13.75 14.1667 13.3769 14.1667 12.9167V7.08333C14.1667 6.6231 13.7936 6.25 13.3333 6.25Z'
						stroke='black'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
					<path
						d='M8.75 6.25V13.75'
						stroke='black'
						stroke-linecap='round'
						stroke-linejoin='round'
					/>
				</g>
				<defs>
					<clipPath id='clip0_0_1'>
						<rect
							width='10'
							height='10'
							fill='white'
							transform='translate(5 5)'
						/>
					</clipPath>
				</defs>
			</svg>
		),
	},
];

// p*
const customersAtRisk = [
	{ text: 'Andrea Vasquez', icon: '' },
	{ text: 'Stiwar Gonzales', icon: '' },
	{ text: 'Luis Lopez', icon: '' },
	{ text: 'Clara Zuluaga', icon: '' },
	{ text: 'Nico', icon: '' },
	{ text: 'Andres Urb', icon: '' },
	{ text: 'Clara', icon: '' },
	{ text: 'Camila ort', icon: '' },
]; //json la data del cliente

function Home() {
	return (
		<Grid container alignItems='flex-start' spacing={2} mt={4}>
			<Menu data={menuConfig} />
			<Grid item lg={12} md={2}>
				<Typography variant='h5' fontWeight='fontWeightBold'>
					Conocimiento de Cliente
				</Typography>
			</Grid>
			<Grid
				container
				item
				lg={8}
				justifyContent='space-between'
				component='section'
			>
				{dataInfo.map((value, index) => (
					<Grid item key={value.title + index}>
						<MiniCard title={value.title} description={value.description} />
					</Grid>
				))}
				<Grid
					container
					item
					component='section'
					justifyContent='space-between'
					mt={6}
				>
					<Grid item>
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
					<Grid item>
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
			<Grid container item lg={4} component='section' justifyContent='center'>
				<Grid item>
					<PaperStyle>
						<List data={shortsCuts} title='ShortsCuts' isIcon />
					</PaperStyle>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default Home;
