import styled from "styled-components";


export const Avatar = styled.img`
    --space: 10rem ;

    width: 50rem;
    height: 50rem;
    position: absolute;
    top: var(--space);
    left: var(--space);
    border-radius: 50%;
    opacity: 0;
    transform: translateX(calc((100% + var(--space)) * -1));
    transition: transform 200ms linear, opacity 100ms linear;
    border: 1rem solid var(--color-blue100);
`;

export const Thumb = styled.img`
    width: 100%;
`;

export const WrapperThumb = styled.figure`
    --space: 10rem;
    position: relative;
    width: 640px;
    border-radius:  4rem;
    overflow: hidden;
    cursor: pointer;
    transition: transform 100ms linear;
    border: 4rem solid var(--color-blue100);

    &:hover{
        --move: calc(var(--space) * -1);
        transform: scale(1.015);


        & > ${Avatar}{
            opacity: 1;
            transform: translateX(0);
            transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
        }
    }

`;
