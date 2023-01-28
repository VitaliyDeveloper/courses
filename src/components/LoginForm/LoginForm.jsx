import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';

//STYLES//////////////////////////////////////
import {
  Modal,
  ModalDialog,
  Form,
  Label,
  BtnContainer,
} from './LoginForm.styled';

//MATRIAL UI///////////////////////////////////////////
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';

//Styles///////////////////////////////////////////

const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

/////////////////////////////////////////////////////

export const LoginForm = ({ closeForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'email':
        setEmail(value);
        break;

      case 'password':
        setPassword(value);
        break;

      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login({ email, password }));

    setEmail('');
    setPassword('');

    closeForm();
  };

  const handleClose = () => {
    closeForm();
  };

  const handleCloseBg = e => {
    if (e.target === e.currentTarget) {
      closeForm();
    }
  };

  return (
    <Modal onClick={handleCloseBg}>
      <ModalDialog>
        <Form onSubmit={handleSubmit}>
          <Label>
            <TextField
              helperText="Введите e-mail"
              label="E-mail:"
              type="mailto"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
          </Label>
          <Label>
            <TextField
              helperText="Введите пароль"
              label="Password:"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
          </Label>
          <BtnContainer>
            <Root>
              <Button type="submit" variant="outlined">
                вход
              </Button>
            </Root>
            <Root>
              <Button onClick={handleClose} variant="outlined">
                отмена
              </Button>
            </Root>
          </BtnContainer>
        </Form>
      </ModalDialog>
    </Modal>
  );
};
