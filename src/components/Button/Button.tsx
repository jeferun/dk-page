import { ButtonProps } from '@mui/material/Button';
import NavigateNext from '@mui/icons-material/NavigateNext';
import { ButtonStyle } from './styles';

function Button({ children, ...props }: ButtonProps) {
	return (
		<ButtonStyle {...props} endIcon={<NavigateNext fontSize='large' />}>
			{children}
		</ButtonStyle>
	);
}

export default Button;
