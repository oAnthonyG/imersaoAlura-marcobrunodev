import styled, { css } from 'styled-components';

const TagAnime = styled.h2`
  display: inline-block;
  font-size: 55rem;
  border-radius: 4rem;
  padding: 20rem 18rem;
  color: var(--color-gray-light);
  background-color: var(--color-blue100);

  ${({ small }) =>
    small &&
    css`
      font-size: 25rem;
      padding: 8rem 10rem;
    `};
`;

export default TagAnime;
