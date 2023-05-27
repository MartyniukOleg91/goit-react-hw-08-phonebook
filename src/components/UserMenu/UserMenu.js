import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';

const theme = createTheme({
  palette: {
    primary: {
      main: '#fff3cc;',
    },
    secondary: {
      main: '#ffffff;',
    },
  },
});

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();
  const handleLogOut = () => dispatch(logOut());

  return (
    <div className={css.wrapper}>
      <p className={css.username}>{user.email}</p>
      <ThemeProvider theme={theme}>
        <Button
          onClick={handleLogOut}
          size="small"
          variant="outlined"
          color="secondary"
        >
          Logout
        </Button>
      </ThemeProvider>
    </div>
  );
};
