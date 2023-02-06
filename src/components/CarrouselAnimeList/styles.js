import styled, { css } from 'styled-components';
import { Background, WrapperThumb } from '../ThumbAnime/styles';
import arrow from '../../assets/imgs/arrow.svg';

export const Wrapper = styled.div`
  display: flex;
  transition: transform 200ms linear;

  & > ${Background} {
    margin-right: 12rem;
  }
  ${({ moveRight }) =>
    moveRight &&
    css`
      transform: translateX(calc(var(--thumb-width) * -1));
    `}
`;

export const Right = styled.button`
  position: absolute;
  width: 50rem;
  height: calc(100% - var(--space-top-bottom) * 2);
  right: 0;
  opacity: 0;
  border: none;
  cursor: pointer;
  background-color: var(--color-black-medium);
  transition: opacity 200ms linear;

  &::after {
    content: url(${arrow});
  }
`;

export const CarrouselStyle = styled.div`
  --space-top-bottom: 20rem;
  --thumb-width: 296.5px;
  position: relative;
  display: flex;
  align-self: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding: var(--space-top-bottom) 30rem;
  overflow: hidden;

  & ${WrapperThumb} {
    width: var(--thumb-width);
  }

  &:hover > ${Right} {
    opacity: 0.8;
  }
  & > ${Right}:hover {
    opacity: 1;
  }
`;
