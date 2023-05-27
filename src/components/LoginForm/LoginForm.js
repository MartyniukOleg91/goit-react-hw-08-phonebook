import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from './LoginForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#fff3cc',
    },
    secondary: {
      main: '#ffffff',
    },
  },
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        className={css.input}
        name="email"
        required={true}
        label="Email"
        variant="outlined"
        margin="normal"
      />
      <TextField
        className={css.input}
        name="password"
        required={true}
        type="password"
        label="Password"
        variant="outlined"
        margin="normal"
      />
      <ThemeProvider theme={theme}>
        <Button type="submit" variant="outlined">
          Log in
        </Button>
      </ThemeProvider>
    </form>
  );
};
