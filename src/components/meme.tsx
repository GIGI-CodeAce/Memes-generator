import React, { useState, useEffect } from "react";

interface Meme {
    id: string;
    name: string;
    url: string;
    width: number;
    height: number;
    box_count: number;
}

export default function Meme() {
    const [allMemes, setAllMemes] = useState<Meme[]>([]);
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

    function getRandomItemFromArray(array: Meme[]) {
        const randomIndex = Math.floor(Math.random() * array.length);
        return array[randomIndex];
    }

    function getMemeImage() {
        const randomMeme = getRandomItemFromArray(allMemes);
        if (!randomMeme) return; // Handle case where the array is empty
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: randomMeme.url
        }));
    }

    function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
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
                    placeholder="Text from top"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Text from bottom"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
                <button 
                    title="Roll a new random meme!"
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="Random Meme" />
                <h2 className="text--top bottom">{meme.topText}</h2>
                <h2 className="text--top top">{meme.bottomText}</h2>
            </div>
        </main>
    );
}
