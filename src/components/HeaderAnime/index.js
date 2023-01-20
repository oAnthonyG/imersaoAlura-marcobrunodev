import styled from "styled-components";
import ButtonAnime from "../ButtonAnime";
import Logo from "../LogoAnime";

const HeaderAnime = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px 40px;
    background-color: var(--color-black-dark);
    border-bottom: 4px solid #2a7ae4;

    @media(max-width: 600px){
        justify-content: center;
        padding: 15px 16px;

        & > ${Logo}{
            height: 35px;
        }

        & > ${ButtonAnime} {
            width: 100vw;
            position: fixed;
            border: 0;
            bottom: 0;
            border-radius: 0;
            background-color: var(--color-primary-medium);
        }
    }

`;

export default HeaderAnime;