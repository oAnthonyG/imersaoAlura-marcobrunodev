import styled from 'styled-components';
import Logo from '../LogoAnime';

const FooterAnime = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 16rem;
  padding: 20rem 0;
  border-top: 4px solid var(--color-primary-medium);
  background-color: var(--color-black-dark);
  color: var(--color-gray-light);

  & > ${Logo} {
    margin-bottom: 20rem;
  }
`;

export default FooterAnime;
