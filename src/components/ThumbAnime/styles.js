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
   

    position: relative;
    width: 640px;
    border-radius:  4rem;
    overflow: hidden;
    cursor: pointer;
    transition: transform 100ms linear;
    background-color: var(--color-blue100);
    border: var(--border) solid var(--color-blue100);


    &:hover{
        transform: translate(var(--move-space), var(--move-space));


        & > ${Avatar}{
            opacity: 1;
            transform: translateX(0);
            transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
        }
    }

`;

export const Background = styled.div`
    --space: 10rem;
    --border: 4rem;
    --move-space: calc(var(--space) * -1);
    
    position: relative;
    background-color: var(--color-blue100);

    &::before {
        content: '';
        position: absolute;
        right: 0;
        top: 0;
        width: var(--space);
        height: var(--space);
        background-color: red;
        transform-origin: right top;
        transition: transform 100ms linear;
    }

    &:hover{
        &::before{
            transform: rotate(45deg);
        }
    }

`;
