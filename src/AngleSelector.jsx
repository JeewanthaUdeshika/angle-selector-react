import React, { useState } from 'react';

function AngleSelector() {
    const [angle, setAngle] = useState(0);

    const handleInputChange = (e) => {
        const value = parseInt(e.target.value);
        setAngle(((value % 360) + 360) % 360);
    };

    const handleSliderChange = (e) => {
        const value = parseInt(e.target.value);
        setAngle(value + 180);
    };

    const handleRadioChange = (e) => {
        setAngle(parseInt(e.target.value));
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <input type="number" value={angle} onChange={handleInputChange} min="0" max="360" />
            <div style={{ width: '300px' }}>
                <input type="range" value={angle - 180} onChange={handleSliderChange} min="-180" max="180" />
            </div>
            <div>
                <label><input type="radio" name="angleRadio" value="0" checked={angle === 0} onChange={handleRadioChange} /> 0°</label>
                <label><input type="radio" name="angleRadio" value="45" checked={angle === 45} onChange={handleRadioChange} /> 45°</label>
                <label><input type="radio" name="angleRadio" value="60" checked={angle === 60} onChange={handleRadioChange} /> 60°</label>
                <label><input type="radio" name="angleRadio" value="90" checked={angle === 90} onChange={handleRadioChange} /> 90°</label>
                <label><input type="radio" name="angleRadio" value="180" checked={angle === 180} onChange={handleRadioChange} /> 180°</label>
            </div>
        </div>
    );
}

export default AngleSelector;
