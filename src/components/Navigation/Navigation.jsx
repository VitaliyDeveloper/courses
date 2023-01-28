import { useState } from 'react';
import { selectToken } from 'redux/auth/auth-selector';
import { useSelector } from 'react-redux';

//IMAGE///////////////////////////////////////////
import logotype from '../../img/NG.png';
import insta from '../../img/instagram.png';
import whatsapp from '../../img/whatsapp.png';
import telegram from '../../img/telegram.png';

//STYLES/////////////////////////////////////////
import {
  ListStyle,
  ItemStyle,
  NavLinkStyle,
  NavContainer,
  SocialList,
  SocialItem,
  Follow,
  Link,
} from './Navigation.styled';

//MATERIAL UI///////////////////////////////
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';

//COMPONENTS/////////////////////////////////////
import { LoginForm } from 'components/LoginForm/LoginForm';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import UserMenu from 'components/UserMenu/UserMenu';

const Root = styled('div')(({ theme }) => ({
  margin: theme.spacing(1),
}));

const Navigation = () => {
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);

  const token = useSelector(selectToken);

  const showUpdateFormRegister = () => {
    setRegister(true);
  };

  const showUpdateFormLogin = () => {
    setLogin(true);
  };

  const closeForm = () => {
    setLogin(false);
    setRegister(false);
  };

  return (
    <NavContainer>
      <img src={logotype} width="80" height="80" alt="logo" />
      <ListStyle>
        <ItemStyle>
          <NavLinkStyle to="/" end>
            Главная
          </NavLinkStyle>
        </ItemStyle>
        <ItemStyle>
          <NavLinkStyle to="/servises">Мои слуги</NavLinkStyle>
        </ItemStyle>
        <ItemStyle>
          <NavLinkStyle to="/gallery">Галерея</NavLinkStyle>
        </ItemStyle>
      </ListStyle>
      <SocialList>
        <SocialItem>
          <Link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fyandex.ru%2Fimages%2F&psig=AOvVaw06g04edUYvNKR0-dYeqpZs&ust=1673603680617000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiO7pniwfwCFQAAAAAdAAAAABAE">
            <img src={insta} alt="instagram" width="40" height="40" />
            <Follow className="follow">@instagram.acc</Follow>
          </Link>
        </SocialItem>
        <SocialItem>
          <Link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fyandex.ru%2Fimages%2F&psig=AOvVaw06g04edUYvNKR0-dYeqpZs&ust=1673603680617000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiO7pniwfwCFQAAAAAdAAAAABAE">
            <img src={whatsapp} alt="whatsapp" width="40" height="40" />
            <Follow className="follow">+7 777 777 77 77</Follow>
          </Link>
        </SocialItem>
        <SocialItem>
          <Link href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fyandex.ru%2Fimages%2F&psig=AOvVaw06g04edUYvNKR0-dYeqpZs&ust=1673603680617000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCKiO7pniwfwCFQAAAAAdAAAAABAE">
            <img src={telegram} alt="telegram" width="40" height="40" />
            <Follow className="follow">+7 777 777 77 77</Follow>
          </Link>
        </SocialItem>
      </SocialList>
      {!token ? (
        <>
          <Root>
            <Button onClick={() => showUpdateFormRegister()} variant="outlined">
              регистрация
            </Button>
          </Root>

          <Root>
            <Button onClick={() => showUpdateFormLogin()} variant="outlined">
              вход
            </Button>
          </Root>
        </>
      ) : (
        <UserMenu />
      )}
      {login && <LoginForm closeForm={closeForm} />}
      {register && <RegisterForm closeForm={closeForm} />}
    </NavContainer>
  );
};

export default Navigation;
