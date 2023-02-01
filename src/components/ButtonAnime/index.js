import styled from 'styled-components';

const ButtonAnime = styled.button`
  font-size: 16rem;
  padding: 12rem 30rem;
  border-radius: 4px;
  text-decoration: none;
  cursor: pointer;
  color: var(--color-gray-light);
  background-color: var(--color-black-dark);
  border: 1px solid var(--color-gray-light);
  transition: background-color 200ms linear,
    transform 200ms cubic-bezier(0, 0, 0.73, 2.24);

  &:hover {
    background-color: var(--color-primary-medium);
    transform: scale(1.1);
  }
  &:active {
    transition: background-color 200ms linear, transform 100ms linear;
    transform: scale(0.95);
  }
`;

export default ButtonAnime;
