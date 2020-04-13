import React from 'react';

import './Slider.css';

const Slider = ( { text, onChange }) => {

    return (
        <div className='switch-wrap'>
            <span className='switch-text'>{text}</span>
            <label className='switch'>
                <input type='checkbox' onChange={(e) => {onChange(e)}}></input>
                <span className='slider'></span>
            </label>
        </div>
    );
};

export default Slider;