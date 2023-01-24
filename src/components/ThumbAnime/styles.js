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
    overflow: hidden;
    cursor: pointer;
    transition: transform 100ms linear;
    background-color: var(--color-blue100);
    border: var(--border) solid var(--color-blue100);


    

`;

export const Background = styled.div`
    --space: 10rem;
    --border: 4rem;
    --move-space: calc(var(--space) * -1);
    
    position: relative;
    background-color: var(--color-blue100);

    &::before, 
    &::after {
        content: '';
        position: absolute;
        width: calc(var(--space) * 1.4);
        height: calc(var(--space) * 1.4);
        background-color: var(--color-blue100);
        
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

            & > ${Avatar}{
                opacity: 1;
                transform: translateX(0);
                transition: transform 100ms 150ms linear, opacity 300ms 150ms linear;
            }
        }
    }

`;
