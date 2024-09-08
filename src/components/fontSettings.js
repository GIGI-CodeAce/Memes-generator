import React, { useState } from "react";

function Settings() {
    let topText = [
        {
            topXaxis: 50,
            topYaxis: 70
        },
        {
            bottomXaxis: 50,
            bottomYaxis: 1
        },
    ];

    // Fixing memeHeight state declaration
    let [memeHeight, setMemeHeight] = useState(window.innerWidth >= 400 ? 400 : 300);

    let [topAxis, setTopAxis] = useState([
        topText[0].topXaxis,
        topText[0].topYaxis
    ]);

    let [bottomAxis, setBottomAxis] = useState([
        topText[1].bottomXaxis,
        topText[1].bottomYaxis
    ]);

    const handleTopX = (event) => {
        const newTopX = event.target.value;
        setTopAxis([newTopX, topAxis[1]]);
    };

    const handleTopY = (event) => {
        const newTopY = event.target.value;
        setTopAxis([topAxis[0], newTopY]);
    };

    const handleBottomX = (event) => {
        const newBottomX = event.target.value;
        setBottomAxis([newBottomX, bottomAxis[1]]);
    };

    const handleBottomY = (event) => {
        const newBottomY = event.target.value;
        setBottomAxis([bottomAxis[0], newBottomY]);
    };

    // Fixing handleMemeHeight to update memeHeight state
    const handleMemeHeight = (event) => {
        const newHeight = event.target.value;
        setMemeHeight(newHeight);
    };

    function RangeInput(id, min, max, value, onChange, className) {
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

    return (
        <>
        <div className="slider-container">
            {RangeInput('topX', 30, 70, topAxis[0], handleTopX, 'custom-range-circle')}
            {RangeInput('topY', 50, 84, topAxis[1], handleTopY, 'custom-range-circle')}
            {RangeInput('bottomX', 30, 70, bottomAxis[0], handleBottomX, 'custom-range-square')}
            {RangeInput('bottomY', -5, 30, bottomAxis[1], handleBottomY, 'custom-range-square')}

            <div className="textSwitches">
                <span className="slider-value" id="top-label">
                    Top X: {topAxis[0]}%, Top Y: {topAxis[1]}%
                </span>
                <span className="slider-value" id="bottom-label">
                    Bottom X: {bottomAxis[0]}%, Bottom Y: {bottomAxis[1]}%
                </span>
            </div>

            {RangeInput('memeHeight', 300, 600, memeHeight, handleMemeHeight, 'custom-range-circle')}
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
