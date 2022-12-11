import List, { ListProps } from '@mui/material/List';
import ListItemText, { ListItemTextProps } from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

export const ListStyle = styled(List)<ListProps>(() => ({
  maxHeight: '13rem',
  overflow: 'scroll',
  minWidth: '16rem',
}));

export const ListItemTextStyle = styled(ListItemText)<ListItemTextProps>(
  () => ({
    '& span': {
      fontSize: '1rem',
    },
    width: '4rem',
  })
);
