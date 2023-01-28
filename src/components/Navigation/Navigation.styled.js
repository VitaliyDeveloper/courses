import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  width: 100%;
  height: 100px;
  margin-bottom: 30px;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: 2px solid var(--accent-color);
`;

export const ListStyle = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const ItemStyle = styled.li`
  position: relative;
  padding-top: 2px;
  padding-right: 5px;
  list-style: none;
  margin: 20px;
  text-align: center;
`;

export const NavLinkStyle = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: var(--accent-color);
  &:hover,
  :focus {
    color: var(--second-color);
  }
  &.active {
    color: var(--accent-color);
  }
`;

/////////////////////////////
export const SocialList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  min-width: 400px;
`;

export const SocialItem = styled.li`
  margin: 10px;
  transition: 250ms ease-in-out;

  &:hover {
    scale: 1.2;
  }

  &:hover .follow {
    display: flex;
  }
`;

export const Follow = styled.p`
  display: none;
  margin-right: 10px;
  color: var(--accent-color);
`;

export const Link = styled.a`
  text-decoration: none;
  font-size: 20px;
  color: var(--some-white-color);

  &:hover,
  :focus {
    color: var(--second-color);
  }

  & .active {
    color: var(--accent-color);
  }
`;
