import Button, { ButtonProps } from '@mui/material/Button';
import { styled } from '@mui/material/styles';

export const ButtonStyle = styled(Button)<ButtonProps>(() => ({
  borderRadius: '100px',
  textTransform: 'capitalize',
  padding: '4px 24px',
  boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.25)',
  fontSize: '1rem'
}));