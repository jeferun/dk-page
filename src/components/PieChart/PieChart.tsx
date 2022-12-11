import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import colors from '../../theme/color';

const { violet, blue, green, orange, yellow } = colors.chart;
ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

const options: any = {
	responsive: true,
	plugins: {
		datalabels: {
			color: 'white',
			labels: {
				title: {
					font: {
						weight: 'bold',
					},
				},
				value: {
					color: 'white',
				},
			},
		},
	},
};

const chartColors = [
	blue[0],
	green[0],
	orange[0],
	yellow[0],
	violet[0],
	violet[1],
	blue[1],
	green[1],
];

const data = {
	labels: ['Campeones', 'Potenciales', 'En riesgo', 'Olvidados', 'Dormidos'],
	datasets: [
		{
			label: '#',
			data: [20, 20, 20, 20, 20],
			backgroundColor: chartColors,
			borderColor: chartColors,
			borderWidth: 1,
		},
	],
};

function PieChart() {
	return <Pie data={data} width='240px' height='240px' options={options} />;
}

export default PieChart;
