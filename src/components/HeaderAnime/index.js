import styled from 'styled-components';
import container from '../../styles/tools/container';
import ButtonAnime from '../ButtonAnime';
import Logo from '../LogoAnime';

export const HeaderAnime = styled.header`
  padding: 20rem 0;
  border-bottom: 4px solid var(--color-primary-medium);
  background-color: var(--color-black-dark);

  @media (max-width: 800px) {
    padding: 15rem 16rem;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${container};

  @media (max-width: 800px) {
    justify-content: center;

    & > ${Logo} {
      height: 35px;
    }

    & > ${ButtonAnime} {
      width: 100vw;
      position: fixed;
      text-align: center;
      border: 0;
      bottom: 0;
      border-radius: 0;
      background-color: var(--color-primary-medium);
    }
  }
`;
