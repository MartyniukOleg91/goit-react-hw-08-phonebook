import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from './RegisterForm.module.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
//import { purple } from '@mui/material/colors';

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

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    console.log(register);

    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} autoComplete="off">
      <TextField
        className={css.input}
        name="name"
        required={true}
        label="Username"
        variant="outlined"
        margin="normal"
      />
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
          Register
        </Button>
      </ThemeProvider>
    </form>
  );
};
