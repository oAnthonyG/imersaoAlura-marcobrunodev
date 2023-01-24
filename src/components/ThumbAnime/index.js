import React from "react";
import { Avatar, Background, Thumb, WrapperThumb } from "./styles";

function ThumbAnime({ src, alt, avatar, animeName }) {

    return (
        <Background>
            <WrapperThumb>
                <Thumb src={src} alt={alt} />
                <Avatar src={avatar} alt={animeName} />
            </WrapperThumb>
        </Background>

    );
}

export default ThumbAnime;