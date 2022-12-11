import Paper, { PaperProps } from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

export const PaperStyle = styled(Paper)<PaperProps>(() => ({
	boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.05)',
	borderRadius: '10px',
	padding: '1.4rem 1rem 0.4rem',
	minHeight: '12vh',
	minWidth: '10vw',
	display: 'flex',
	flexDirection: 'column',
	justifyContent: 'center',
	alignItems: 'center',
}));