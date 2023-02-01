import styled from 'styled-components';

export const Anime = styled.figcaption`
  font-size: 20rem;
  font-weight: bold;
  text-shadow: 2px 2px var(--color-black-dark);
  color: var(--color-gray-light);
`;

export const Avatar = styled.img`
  width: 50rem;
  height: 50rem;
  border-radius: 50%;
  margin-right: 10rem;
  border: 2rem solid var(--color-gray-light);
`;

export const WrapperAvatar = styled.figure`
  display: flex;
  align-items: center;
`;
