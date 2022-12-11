import { alpha } from '@mui/material/styles';
import palette from './palette';

const colors = {
  chart: {
    violet: ['#5729C8', '#9E86FF', '#D0AEFF', '#F7D2FF'],
    blue: ['#0D87C9', '#83CFFF', '#A5F3FF', '#CCFAFF'],
    green: ['#8ED081', '#60F1C8', '#A4F7CC', '#C0F2DC'],
    orange: ['#FF6637', '#FF8F6D', '#FFBD98', '#FFF2D4'],
    yellow: ['#FEB046', '#FFEF5A', '#FFF7AE', '#FFF3D6'],
  },
  box: alpha(palette.primary.main, 0.08)
};

export default colors;
