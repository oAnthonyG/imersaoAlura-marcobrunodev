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
    transform-origin: bottom left;
    transform: translateX(100%) scaleX(1.5) skew(-30deg);
    transition: transform 250ms linear;
  }

  &:after {
    content: '${({ children }) => children}';
    position: absolute;
  }

  &:hover::before {
    transform: translateX(-30%) scaleX(1.5) skew(-30deg);
  }
`;

export default ButtonAnime;
