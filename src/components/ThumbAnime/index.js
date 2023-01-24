import React from "react";
import { Avatar, Thumb, WrapperThumb } from "./styles";

function ThumbAnime({src, alt, avatar, animeName}){
    
    return (
        <WrapperThumb>
            <Thumb src={src} alt={alt} />
            <Avatar src={avatar} alt={animeName} />
        </WrapperThumb>

    );
}

export default ThumbAnime;