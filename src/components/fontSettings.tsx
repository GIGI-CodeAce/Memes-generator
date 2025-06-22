import React, { useState } from "react";
import "../styles/style.scss";

interface InputProps {
    id: string;
    min: number;
    max: number;
    value: number | undefined;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    className: string;
}

function RangeInput({ id, min, max, value, onChange, className }: InputProps) {
    return (
        <input
            type="range"
            id={id}
            min={min}
            max={max}
            value={value}
            onChange={onChange}
            className={className}
        />
    );
}

function Settings() {
    const initialTopText = [
        { topXaxis: 50, topYaxis: 70 },
        { bottomXaxis: 50, bottomYaxis: 1 },
    ];

    const [memeHeight, setMemeHeight] = useState(window.innerWidth >= 400 ? 400 : 300);
    const [topAxis, setTopAxis] = useState([initialTopText[0].topXaxis, initialTopText[0].topYaxis]);
    const [bottomAxis, setBottomAxis] = useState([initialTopText[1].bottomXaxis, initialTopText[1].bottomYaxis]);

    const handleTopX: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const newTopX = +event.target.value;
        setTopAxis((prev) => [newTopX, prev[1]]);
    };
    
    const handleTopY: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const newTopY = +event.target.value;
        setTopAxis((prev) => [prev[0], newTopY]);
    };
    
    const handleBottomX: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const newBottomX = +event.target.value;
        setBottomAxis((prev) => [newBottomX, prev[1]]);
    };
    
    const handleBottomY: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const newBottomY = +event.target.value;
        setBottomAxis((prev) => [prev[0], newBottomY]);
    };    

    const handleMemeHeight: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        const newHeight = +event.target.value;
        setMemeHeight(newHeight);
    };

    return (
        <>
            <div className="slider-container">
                <RangeInput
                    id="topX"
                    min={30}
                    max={70}
                    value={topAxis[0]}
                    onChange={handleTopX}
                    className="custom-range-circle"
                />
                <RangeInput
                    id="topY"
                    min={50}
                    max={84}
                    value={topAxis[1]}
                    onChange={handleTopY}
                    className="custom-range-circle"
                />
                <RangeInput
                    id="bottomX"
                    min={30}
                    max={70}
                    value={bottomAxis[0]}
                    onChange={handleBottomX}
                    className="custom-range-square"
                />
                <RangeInput
                    id="bottomY"
                    min={-5}
                    max={30}
                    value={bottomAxis[1]}
                    onChange={handleBottomY}
                    className="custom-range-square"
                /><br/>
                <div className="textSwitches">
                <span className="slider-value" id="top-label">
                    Top X: {topAxis[0]}%, Top Y: {topAxis[1]}%
                </span>
                <span className="slider-value" id="bottom-label">
                    Bottom X: {bottomAxis[0]}%, Bottom Y: {bottomAxis[1]}%
                </span><br/>
            </div>
                <RangeInput
                    id="memeHeight"
                    min={300}
                    max={600}
                    value={memeHeight}
                    onChange={handleMemeHeight}
                    className="custom-range-circle"
                />
                <span className="slider-value" id="meme-height-label">
                    Meme Height: {memeHeight}px
                </span>
            </div>

            <style>{`
                .top {
                    top: ${topAxis[1]}%;
                    left: ${topAxis[0]}%;
                    position: absolute;
                }
                .bottom {
                    top: ${bottomAxis[1]}%;
                    left: ${bottomAxis[0]}%;
                    position: absolute;
                }
                .slider-container {
                    margin: 20px;
                }
                .slider-value {
                    display: block;
                    margin-top: 10px;
                }
                .meme--image {
                    height: ${memeHeight}px;
                }
            `}</style>
        </>
    );
}

export default Settings;