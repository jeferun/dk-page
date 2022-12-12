import { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import Container from '@mui/material/Container';
import themeDefault from '../pages/theme-default';
import Navbar from '../components/Navbar';

interface IProps {
	children: ReactNode;
}

function Layout({ children }: IProps) {
	return (
		<ThemeProvider theme={themeDefault}>
			<CssBaseline />
			<>
				<Navbar />
				<Container maxWidth='lg'>{children}</Container>
			</>
		</ThemeProvider>
	);
}

export default Layout;
