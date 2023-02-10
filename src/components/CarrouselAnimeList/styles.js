import styled, { css } from 'styled-components';
import { Background, WrapperThumb } from '../ThumbAnime/styles';
import arrow from '../../assets/imgs/arrow.svg';

const thumbWidth = 300;
const spaceRight = 12;

function moveCarousel(move, moveLastRight) {
  const oneStep = thumbWidth + spaceRight;
  const wichMove = oneStep > moveLastRight ? moveLastRight : oneStep;
  return wichMove * move;
}

export const Wrapper = styled.div`
  --space-right: ${spaceRight}rem;
  display: flex;
  transition: transform 200ms linear;

  & > ${Background} {
    margin-right: var(--space-right);
  }
  ${({ move, moveLastRight }) => css`
    transform: translateX(${moveCarousel(move, moveLastRight)}px);
  `}
`;
const Arrow = css`
  position: absolute;
  width: 50rem;
  height: calc(100% - var(--space-top-bottom) * 2);
  opacity: 0;
  border: none;
  cursor: pointer;
  z-index: 1;
  background-color: var(--color-black-medium);
  transition: opacity 200ms linear;

  &::after {
    content: url(${arrow});
  }
`;

export const Right = styled.button`
  ${Arrow};
  right: 0;
`;

export const Left = styled.button`
  ${Arrow};
  left: 0;
  transform: rotate(180deg);
`;
export const CarrouselStyle = styled.div`
  --space-top-bottom: 20rem;
  --space-right-left: 30rem;
  --thumb-width: ${thumbWidth}px;
  position: relative;
  display: flex;
  align-self: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding: var(--space-top-bottom) var(--space-right-left);
  overflow: hidden;

  & ${WrapperThumb} {
    width: var(--thumb-width);
    box-sizing: border-box;
  }

  &:hover > ${Right} {
    opacity: 0.8;
  }
  &:hover > ${Left} {
    ${({ leftShow }) =>
      leftShow
        ? css`
            display: block;
            opacity: 0.8;
          `
        : css`
            display: none;
            opacity: 0;
          `}
  }
  & > ${Right}:hover {
    opacity: 1;
  }
`;
