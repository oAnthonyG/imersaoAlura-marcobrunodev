import styled from "styled-components";
import { WrapperAvatar } from "../AvatarAnime/styles";


export const Thumb = styled.img`
    width: 100%;
    transition: filter 100ms linear;

`;

export const WrapperThumb = styled.figure`
   
    position: relative;
    width: 640px;
    overflow: hidden;
    cursor: pointer;
    transition: transform 100ms linear;
    background-color: var(--color-pixelart);
    border: var(--border) solid var(--color-pixelart);

   & > ${WrapperAvatar}{
    position: absolute;
    top: var(--space);
    left: var(--space);
    margin-right: 10rem;
    opacity: 0;
    transform: translateX(calc((100% + var(--space)) * -1));
    transition: transform 200ms linear, opacity 100ms linear;
   }
`;

export const Background = styled.div`
    --space: 10rem;
    --border: 4rem;
    --move-space: calc(var(--space) * -1);
    
    position: relative;
    background-color: var(--color-pixelart);

    &::before, 
    &::after {
        content: '';
        position: absolute;
        width: calc(var(--space) * 1.4);
        height: calc(var(--space) * 1.4);
        background-color: var(--color-pixelart);
        transition: transform 60ms linear;
    }

    &::before{
        right: 0;
        top: 0;
        transform-origin: right top;
        transform: rotate(45deg) scale(0);
    }

    &::after{
        left: 0;
        bottom: 0;
        z-index: -1;
        transform-origin: left bottom;
        transform: rotate(-45deg) scale(0);
    }

    &:hover{
        &::before{
            transform: rotate(45deg) scale(1);
        }
        &::after{
            transform: rotate(-45deg) scale(1);
        }

        & > ${WrapperThumb}{ 
            transform: translate(var(--move-space), var(--move-space));

            & > ${Thumb}{
                filter: brightness(0.6);
            }

            & > ${WrapperAvatar}{
                opacity: 1;
                transform: translateX(0);
                transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
            }
        }
    }

`;
