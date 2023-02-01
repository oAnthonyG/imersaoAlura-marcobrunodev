import styled from 'styled-components';

const ButtonAnime = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 16rem;
  padding: 12rem 30rem;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: var(--color-gray-light);
  background-color: var(--color-black-dark);
  border: 1px solid var(--color-gray-light);
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--color-primary-medium);
    transform: translateX(-100%);
    transition: transform 300ms linear;
  }

  &:after {
    content: '${({ children }) => children}';
    position: absolute;
  }

  &:hover::before {
    transform: translateX(0);
  }
`;

export default ButtonAnime;
