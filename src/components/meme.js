import React, { useState, useEffect } from "react";

export default function Meme() {


    const [allMemes, setAllMemes] = useState([]);
    const [meme, setMeme] = useState({
        topText: "one does not simply",
        bottomText: "walk into mordor",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    });

    useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes");
            const data = await res.json();
            setAllMemes(data.data.memes);
        }
        getMemes();
    }, []);

    function getRandomItemFromArray(array) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function getMemeImage() {
        const randomMeme = getRandomItemFromArray(allMemes);
        const url = randomMeme.url;
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }));
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
            <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
                <h2 className="text--top top">{meme.topText}</h2>
                <h2 className="text--top bottom">{meme.bottomText}</h2>
            </div>
        </main>
    );
}