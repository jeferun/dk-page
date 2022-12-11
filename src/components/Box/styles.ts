import Avatar, { AvatarProps } from '@mui/material/Avatar';
import { styled } from '@mui/material/styles';
import colors from '../../theme/color';

export interface Props {
  label?: string;
  size?: 'small' | 'large';
  icon?: string | JSX.Element;
  handleClick?: () => void;
}

const large = 72;
const small = 32;

export const AvatarStyle = styled(Avatar)<AvatarProps & Props>(({ size }) => ({
  width: size === 'large' ? large : small,
  height: size === 'large' ? large : small,
  backgroundColor: colors.box
}));