import styled from 'styled-components';

export const UserMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export const NameText = styled.p`
  text-align: center;
  color: var(--accent-color);
  min-width: 100px;
  height: 20px;
  margin-bottom: 5px;
  overflow: auto;
  /* animation: marquee 1500ms infinite linear; */
  /* &:hover {
    animation-play-state: paused;
  }
  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-200%);
    }
  } */
`;
