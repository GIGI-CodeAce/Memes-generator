
import React from "react";

const trollFaceImage = "/memes/mdMedia/TrollFace.png"

export default function Header() {

    return (
        <header className="header">

        <img 
        src= {trollFaceImage }
        className="header--image"
        alt="Troll Face"
        />
        <h2 className="header--title">Meme Generator</h2>
        <h4 className="header--project">React Course - Project</h4>
    </header>  
    )
}