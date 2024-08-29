import React, { useState } from "react";

function Settings() {
    let topText = [
        {
            topXaxis: 50,
            topYaxis: 70
        },
        {
            bottomXaxis: 1,
            bottomYaxis: 1
        }
    ];

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

    function RangeInput(id, min, max, value, onChange){
        return(
            <input
            type="range"
            id = {id}
            min= {min}
            max= {max}
            value= {value}
            onChange= {onChange}
        />
        )
    }

    return (
        <>
             <div className="slider-container">

                <input
                    type="range"
                    id="topX"
                    min="30"
                    max="80"
                    value={topAxis[0]}
                    onChange={handleTopX}
                />

                <input
                    type="range"
                    id="topY"
                    min="50"
                    max="80"
                    value={topAxis[1]}
                    onChange={handleTopY}
                />
                <input
                    type="range"
                    id="bottomX"
                    min="0"
                    max="100"
                    value={bottomAxis[0]}
                    onChange={handleBottomX}
                />
                <input
                    type="range"
                    id="bottomY"
                    min="-10"
                    max="20"
                    value={bottomAxis[1]}
                    onChange={handleBottomY}
                />

                <span className="slider-value" id="volume-label">
                    Top X: {topAxis[0]}%, Top Y: {topAxis[1]}%
                </span>
                <span className="slider-value" id="volume-label">
                    Bottom X: {bottomAxis[0]}%, Bottom Y: {bottomAxis[1]}%
                </span>
            </div>

            <style jsx>{`
                .top {
                    top: ${topAxis[1]}%;
                    left: ${topAxis[0]}%;
                    position: absolute;
                }
                .bottom {
                    top: ${bottomAxis[1]}%;
                    right: ${bottomAxis[0]}%;
                    position: absolute;
                }
                .slider-container {
                    margin: 20px;
                }
                .slider-value {
                    display: block;
                    margin-top: 10px;
                }
                `}</style>

        </>
    );
}

export default Settings;